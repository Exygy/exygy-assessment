import {
  ApplicationsService,
  ApplicationFlaggedSetsService,
  AuthService,
  ListingsService,
  User,
  UserBasic,
  UserCreate,
  UserService,
  serviceOptions,
  Status,
  AmiChartsService,
  UnitAccessibilityPriorityTypesService,
  UnitTypesService,
  PreferencesService,
} from "@bloom-housing/backend-core/types"
import {
  createContext,
  createElement,
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react"
import axiosStatic from "axios"
import { ConfigContext } from "../config/ConfigContext"
import { createAction, createReducer } from "typesafe-actions"
import { clearToken, getToken, getTokenTtl, setToken } from "./token"
import { NavigationContext } from "../config/NavigationContext"

type ContextProps = {
  amiChartsService: AmiChartsService
  applicationsService: ApplicationsService
  applicationFlaggedSetsService: ApplicationFlaggedSetsService
  listingsService: ListingsService
  userService: UserService
  authService: AuthService
  preferencesService: PreferencesService
  unitPriorityService: UnitAccessibilityPriorityTypesService
  unitTypesService: UnitTypesService
  login: (email: string, password: string) => Promise<User | undefined>
  resetPassword: (
    token: string,
    password: string,
    passwordConfirmation: string
  ) => Promise<User | undefined>
  signOut: () => void
  confirmAccount: (token: string) => Promise<User | undefined>
  forgotPassword: (email: string) => Promise<string | undefined>
  createUser: (user: UserCreate) => Promise<UserBasic | undefined>
  resendConfirmation: (email: string) => Promise<Status | undefined>
  accessToken?: string
  initialStateLoaded: boolean
  loading: boolean
  profile?: User
}

// Internal Provider State
type AuthState = {
  accessToken?: string
  initialStateLoaded: boolean
  language?: string
  loading: boolean
  profile?: User
  refreshTimer?: number
  storageType: string
}

type DispatchType = (...arg: [unknown]) => void

// State Mutation Actions
const saveToken = createAction("SAVE_TOKEN")<{
  apiUrl: string
  accessToken: string
  dispatch: DispatchType
}>()
const saveProfile = createAction("SAVE_PROFILE")<User>()
const startLoading = createAction("START_LOADING")()
const stopLoading = createAction("STOP_LOADING")()
const signOut = createAction("SIGN_OUT")()

const scheduleTokenRefresh = (accessToken: string, onRefresh: (accessToken: string) => void) => {
  const ttl = getTokenTtl(accessToken)

  if (ttl < 0) {
    // If ttl is negative, then our token is already expired, we'll have to re-login to get a new token.
    //dispatch(signOut())
    return null
  } else {
    // Queue up a refresh for ~1 minute before the token expires
    return (setTimeout(() => {
      const run = async () => {
        const reposne = await new AuthService().token()
        if (reposne) {
          onRefresh(reposne.accessToken)
        }
      }
      void run()
    }, Math.max(ttl - 60000, 0)) as unknown) as number
  }
}
const reducer = createReducer(
  {
    loading: false,
    initialStateLoaded: false,
    storageType: "session",
    language: "en",
  } as AuthState,
  {
    SAVE_TOKEN: (state, { payload }) => {
      const { refreshTimer: oldRefresh, ...rest } = state
      const { accessToken, apiUrl, dispatch } = payload

      // If an existing refresh timer has been defined, remove it as the access token has changed
      if (oldRefresh) {
        clearTimeout(oldRefresh)
      }

      // Save off the token in local storage for persistence across reloads.
      setToken(state.storageType, accessToken)

      const refreshTimer = scheduleTokenRefresh(accessToken, (newAccessToken) =>
        dispatch(saveToken({ apiUrl, accessToken: newAccessToken, dispatch }))
      )
      serviceOptions.axios = axiosStatic.create({
        baseURL: apiUrl,
        headers: {
          language: state.language,
          countyCode: process.env.countyCode,
          ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
        },
      })

      return {
        ...rest,
        ...(refreshTimer && { refreshTimer }),
        accessToken: accessToken,
      }
    },
    SAVE_PROFILE: (state, { payload: user }) => ({ ...state, profile: user }),
    START_LOADING: (state) => ({ ...state, loading: true }),
    END_LOADING: (state) => ({ ...state, loading: false }),
    SIGN_OUT: ({ storageType }) => {
      clearToken(storageType)
      // Clear out all existing state other than the storage type
      return { loading: false, storageType, initialStateLoaded: true }
    },
  }
)

export const AuthContext = createContext<Partial<ContextProps>>({})
export const AuthProvider: FunctionComponent = ({ children }) => {
  const { apiUrl, storageType } = useContext(ConfigContext)
  const { router } = useContext(NavigationContext)
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    initialStateLoaded: false,
    storageType,
    language: router.locale,
  })

  const userService = useMemo(() => new UserService(), [])
  const authService = new AuthService()

  useEffect(() => {
    serviceOptions.axios = axiosStatic.create({
      baseURL: apiUrl,
      headers: {
        language: router.locale,
        countyCode: process.env.countyCode,
        appUrl: window.location.origin,
        ...(state.accessToken && { Authorization: `Bearer ${state.accessToken}` }),
      },
    })
  }, [router, apiUrl, state.accessToken, router.locale])

  // On initial load/reload, check localStorage to see if we have a token available
  useEffect(() => {
    const accessToken = getToken(storageType)
    if (accessToken) {
      const ttl = getTokenTtl(accessToken)

      if (ttl > 0) {
        dispatch(saveToken({ accessToken, apiUrl, dispatch }))
      } else {
        dispatch(signOut())
      }
    } else {
      dispatch(signOut())
    }
  }, [apiUrl, storageType])

  // Load our profile as soon as we have an access token available
  useEffect(() => {
    if (!state.profile && state.accessToken && !state.loading) {
      const loadProfile = async () => {
        dispatch(startLoading())
        try {
          const profile = await userService?.userControllerProfile()
          if (profile) {
            dispatch(saveProfile(profile))
          }
        } finally {
          dispatch(stopLoading())
        }
      }
      void loadProfile()
    }
  }, [state.profile, state.accessToken, apiUrl, userService, state.loading])

  const contextValues: ContextProps = {
    amiChartsService: new AmiChartsService(),
    applicationsService: new ApplicationsService(),
    applicationFlaggedSetsService: new ApplicationFlaggedSetsService(),
    listingsService: new ListingsService(),
    userService: new UserService(),
    authService: new AuthService(),
    preferencesService: new PreferencesService(),
    unitPriorityService: new UnitAccessibilityPriorityTypesService(),
    unitTypesService: new UnitTypesService(),
    loading: state.loading,
    accessToken: state.accessToken,
    initialStateLoaded: state.initialStateLoaded,
    profile: state.profile,
    login: async (email, password) => {
      dispatch(signOut())
      dispatch(startLoading())
      try {
        const response = await authService?.login({ body: { email, password } })
        if (response) {
          dispatch(saveToken({ accessToken: response.accessToken, apiUrl, dispatch }))
          const profile = await userService?.userControllerProfile()
          if (profile) {
            dispatch(saveProfile(profile))
            return profile
          }
        }
        return undefined
      } finally {
        dispatch(stopLoading())
      }
    },
    signOut: () => dispatch(signOut()),
    resetPassword: async (token, password, passwordConfirmation) => {
      dispatch(startLoading())
      try {
        const response = await userService?.updatePassword({
          body: {
            token,
            password,
            passwordConfirmation,
          },
        })
        if (response) {
          dispatch(saveToken({ accessToken: response.accessToken, apiUrl, dispatch }))
          const profile = await userService?.userControllerProfile()
          if (profile) {
            dispatch(saveProfile(profile))
            return profile
          }
        }
        return undefined
      } finally {
        dispatch(stopLoading())
      }
    },
    confirmAccount: async (token) => {
      dispatch(startLoading())
      try {
        const response = await userService?.confirm({ body: { token } })
        if (response) {
          dispatch(saveToken({ accessToken: response.accessToken, apiUrl, dispatch }))
          const profile = await userService?.userControllerProfile()
          if (profile) {
            dispatch(saveProfile(profile))
            return profile
          }
        }
        return undefined
      } finally {
        dispatch(stopLoading())
      }
    },
    createUser: async (user: UserCreate) => {
      dispatch(startLoading())
      try {
        const response = await userService?.create({
          body: { ...user, appUrl: window.location.origin },
        })
        return response
      } finally {
        dispatch(stopLoading())
      }
    },
    resendConfirmation: async (email: string) => {
      dispatch(startLoading())
      try {
        const response = await userService?.resendConfirmation({
          body: { email, appUrl: window.location.origin },
        })
        return response
      } finally {
        dispatch(stopLoading())
      }
    },
    forgotPassword: async (email) => {
      dispatch(startLoading())
      try {
        const response = await userService?.forgotPassword({
          body: { email, appUrl: window.location.origin },
        })
        return response?.message
      } finally {
        dispatch(stopLoading())
      }
    },
  }
  return createElement(AuthContext.Provider, { value: contextValues }, children)
}
