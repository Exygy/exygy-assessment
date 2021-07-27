import {
  ListingsService,
  serviceOptions,
  UnitTypesService,
} from "@bloom-housing/backend-core/types"
import {
  createContext,
  createElement,
  FunctionComponent,
  useContext,
  useEffect,
  useReducer,
} from "react"
import axiosStatic from "axios"
import { ConfigContext } from "../config/ConfigContext"
import { createReducer } from "typesafe-actions"
import { NavigationContext } from "../config/NavigationContext"

type ContextProps = {
  listingsService: ListingsService
  unitTypesService: UnitTypesService
  initialStateLoaded: boolean
  loading: boolean
}

// Internal Provider State
type AuthState = {
  initialStateLoaded: boolean
  language?: string
  loading: boolean
  refreshTimer?: number
  storageType: string
}

const reducer = createReducer(
  {
    loading: false,
    initialStateLoaded: false,
    storageType: "session",
    language: "en",
  } as AuthState,
  {
    START_LOADING: (state) => ({ ...state, loading: true }),
    END_LOADING: (state) => ({ ...state, loading: false }),
  }
)

export const AuthContext = createContext<Partial<ContextProps>>({})
export const AuthProvider: FunctionComponent = ({ children }) => {
  const { apiUrl, storageType } = useContext(ConfigContext)
  const { router } = useContext(NavigationContext)
  const [state] = useReducer(reducer, {
    loading: false,
    initialStateLoaded: false,
    storageType,
    language: router.locale,
  })

  useEffect(() => {
    serviceOptions.axios = axiosStatic.create({
      baseURL: apiUrl,
      headers: {
        language: router.locale,
        countyCode: process.env.countyCode,
        appUrl: window.location.origin,
      },
    })
  }, [router, apiUrl, router.locale])

  const contextValues: ContextProps = {
    listingsService: new ListingsService(),
    unitTypesService: new UnitTypesService(),
    loading: state.loading,
    initialStateLoaded: state.initialStateLoaded,
  }
  return createElement(AuthContext.Provider, { value: contextValues }, children)
}
