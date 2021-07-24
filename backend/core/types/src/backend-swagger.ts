/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import { AxiosInstance } from "axios"

export interface IRequestOptions {
  headers?: any
  baseURL?: string
  responseType?: string
}

export interface IRequestConfig {
  method?: any
  headers?: any
  url?: any
  data?: any
  params?: any
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance
}

// Add default options
export const serviceOptions: ServiceOptions = {}

// Instance selector
export function axios(
  configs: IRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void
): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  } else {
    throw new Error("please inject yourself instance like axios  ")
  }
}

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: any
): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url }
  configs.headers = {
    ...options.headers,
    "Content-Type": contentType,
  }
  return configs
}

const basePath = ""

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[]
}

export class ListResult<T> implements IListResult<T> {
  items?: T[]
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number
  items?: T[]
}

export class PagedResult<T> implements IPagedResult<T> {
  totalCount?: number
  items?: T[]
}

// customer definition
// empty

export class AmiChartsService {
  /**
   * List amiCharts
   */
  list(options: IRequestOptions = {}): Promise<AmiChart[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/amiCharts"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create amiChart
   */
  create(
    params: {
      /** requestBody */
      body?: AmiChartCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AmiChart> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/amiCharts"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update amiChart
   */
  update(
    params: {
      /** requestBody */
      body?: AmiChartUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AmiChart> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/amiCharts/{amiChartId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get amiChart by id
   */
  retrieve(
    params: {
      /**  */
      amiChartId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AmiChart> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/amiCharts/{amiChartId}"
      url = url.replace("{amiChartId}", params["amiChartId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete amiChart by id
   */
  delete(
    params: {
      /**  */
      amiChartId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/amiCharts/{amiChartId}"
      url = url.replace("{amiChartId}", params["amiChartId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class ApplicationFlaggedSetsService {
  /**
   * List application flagged sets
   */
  list(
    params: {
      /**  */
      page?: number
      /**  */
      limit?: number
      /**  */
      listingId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedApplicationFlaggedSet> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applicationFlaggedSets"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)
      configs.params = {
        page: params["page"],
        limit: params["limit"],
        listingId: params["listingId"],
      }
      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Retrieve application flagged set by id
   */
  retrieve(
    params: {
      /**  */
      afsId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ApplicationFlaggedSet> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applicationFlaggedSets/{afsId}"
      url = url.replace("{afsId}", params["afsId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Resolve application flagged set
   */
  resolve(
    params: {
      /** requestBody */
      body?: ApplicationFlaggedSetResolve
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ApplicationFlaggedSet> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applicationFlaggedSets/resolve"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class ApplicationsService {
  /**
   * List applications
   */
  list(
    params: {
      /**  */
      page?: number
      /**  */
      limit?: number
      /**  */
      listingId?: string
      /**  */
      search?: string
      /**  */
      userId?: string
      /**  */
      orderBy?: string
      /**  */
      order?: string
      /**  */
      markedAsDuplicate?: boolean
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedApplication> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)
      configs.params = {
        page: params["page"],
        limit: params["limit"],
        listingId: params["listingId"],
        search: params["search"],
        userId: params["userId"],
        orderBy: params["orderBy"],
        order: params["order"],
        markedAsDuplicate: params["markedAsDuplicate"],
      }
      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create application
   */
  create(
    params: {
      /** requestBody */
      body?: ApplicationCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Application> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * List applications as csv
   */
  listAsCsv(
    params: {
      /**  */
      page?: number
      /**  */
      limit?: number
      /**  */
      listingId?: string
      /**  */
      search?: string
      /**  */
      userId?: string
      /**  */
      orderBy?: string
      /**  */
      order?: string
      /**  */
      markedAsDuplicate?: boolean
      /**  */
      includeHeaders?: boolean
      /**  */
      includeDemographics?: boolean
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications/csv"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)
      configs.params = {
        page: params["page"],
        limit: params["limit"],
        listingId: params["listingId"],
        search: params["search"],
        userId: params["userId"],
        orderBy: params["orderBy"],
        order: params["order"],
        markedAsDuplicate: params["markedAsDuplicate"],
        includeHeaders: params["includeHeaders"],
        includeDemographics: params["includeDemographics"],
      }
      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get application by id
   */
  retrieve(
    params: {
      /**  */
      applicationId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Application> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications/{applicationId}"
      url = url.replace("{applicationId}", params["applicationId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update application by id
   */
  update(
    params: {
      /**  */
      applicationId: string
      /** requestBody */
      body?: ApplicationUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Application> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications/{applicationId}"
      url = url.replace("{applicationId}", params["applicationId"] + "")

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete application by id
   */
  delete(
    params: {
      /**  */
      applicationId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications/{applicationId}"
      url = url.replace("{applicationId}", params["applicationId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Submit application
   */
  submit(
    params: {
      /** requestBody */
      body?: ApplicationCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Application> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/applications/submit"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class AssetsService {
  /**
   * Create asset
   */
  create(
    params: {
      /** requestBody */
      body?: AssetCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Asset> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/assets"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * List assets
   */
  list(
    params: {
      /**  */
      page?: number
      /**  */
      limit?: number
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PaginatedAssets> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/assets"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)
      configs.params = { page: params["page"], limit: params["limit"] }
      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create presigned upload metadata
   */
  createPresignedUploadMetadata(
    params: {
      /** requestBody */
      body?: CreatePresignedUploadMetadata
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CreatePresignedUploadMetadataResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/assets/presigned-upload-metadata"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get asset by id
   */
  retrieve(
    params: {
      /**  */
      assetId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Asset> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/assets/{assetId}"
      url = url.replace("{assetId}", params["assetId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class AuthService {
  /**
   * Login
   */
  login(
    params: {
      /** requestBody */
      body?: Login
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/auth/login"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Token
   */
  token(options: IRequestOptions = {}): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/auth/token"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class UserService {
  /**
   *
   */
  userControllerProfile(options: IRequestOptions = {}): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create user
   */
  create(
    params: {
      /**  */
      noWelcomeEmail?: boolean
      /** requestBody */
      body?: UserCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserBasic> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)
      configs.params = { noWelcomeEmail: params["noWelcomeEmail"] }
      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Resend confirmation
   */
  resendConfirmation(
    params: {
      /** requestBody */
      body?: Email
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Status> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user/resend-confirmation"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Confirm email
   */
  confirm(
    params: {
      /** requestBody */
      body?: Confirm
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user/confirm"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Forgot Password
   */
  forgotPassword(
    params: {
      /** requestBody */
      body?: ForgotPassword
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ForgotPasswordResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user/forgot-password"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update Password
   */
  updatePassword(
    params: {
      /** requestBody */
      body?: UpdatePassword
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user/update-password"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update user
   */
  update(
    params: {
      /** requestBody */
      body?: UserUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/user/{id}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class JurisdictionsService {
  /**
   * List jurisdictions
   */
  list(options: IRequestOptions = {}): Promise<Jurisdiction[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/jurisdictions"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create jurisdiction
   */
  create(
    params: {
      /** requestBody */
      body?: JurisdictionCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Jurisdiction> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/jurisdictions"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update jurisdiction
   */
  update(
    params: {
      /** requestBody */
      body?: JurisdictionUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Jurisdiction> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/jurisdictions/{jurisdictionId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get jurisdiction by id
   */
  retrieve(
    params: {
      /**  */
      jurisdictionId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Jurisdiction> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/jurisdictions/{jurisdictionId}"
      url = url.replace("{jurisdictionId}", params["jurisdictionId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete jurisdiction by id
   */
  delete(
    params: {
      /**  */
      jurisdictionId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/jurisdictions/{jurisdictionId}"
      url = url.replace("{jurisdictionId}", params["jurisdictionId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class ListingsService {
  /**
   * List listings
   */
  list(
    params: {
      /**  */
      jsonpath?: string
      /**  */
      filter?: ListingFilterParams[]
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Listing[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/listings"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)
      configs.params = { jsonpath: params["jsonpath"], filter: params["filter"] }
      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create listing
   */
  create(
    params: {
      /** requestBody */
      body?: ListingCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Listing> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/listings"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get listing by id
   */
  retrieve(
    params: {
      /**  */
      listingId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Listing> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/listings/{listingId}"
      url = url.replace("{listingId}", params["listingId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update listing by id
   */
  update(
    params: {
      /**  */
      listingId: string
      /** requestBody */
      body?: ListingUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Listing> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/listings/{listingId}"
      url = url.replace("{listingId}", params["listingId"] + "")

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete listing by id
   */
  delete(
    params: {
      /**  */
      listingId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/listings/{listingId}"
      url = url.replace("{listingId}", params["listingId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class PreferencesService {
  /**
   * List preferences
   */
  list(options: IRequestOptions = {}): Promise<Preference[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/preferences"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create preference
   */
  create(
    params: {
      /** requestBody */
      body?: PreferenceCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Preference> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/preferences"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update preference
   */
  update(
    params: {
      /** requestBody */
      body?: PreferenceUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Preference> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/preferences/{preferenceId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get preference by id
   */
  retrieve(
    params: {
      /**  */
      preferenceId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Preference> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/preferences/{preferenceId}"
      url = url.replace("{preferenceId}", params["preferenceId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete preference by id
   */
  delete(
    params: {
      /**  */
      preferenceId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/preferences/{preferenceId}"
      url = url.replace("{preferenceId}", params["preferenceId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class PropertiesService {
  /**
   * List properties
   */
  list(options: IRequestOptions = {}): Promise<Property[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/properties"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create property
   */
  create(
    params: {
      /** requestBody */
      body?: PropertyCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Property> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/properties"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update property
   */
  update(
    params: {
      /** requestBody */
      body?: PropertyUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Property> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/properties/{propertyId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get property by id
   */
  retrieve(
    params: {
      /**  */
      propertyId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Property> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/properties/{propertyId}"
      url = url.replace("{propertyId}", params["propertyId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete property by id
   */
  delete(
    params: {
      /**  */
      propertyId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/properties/{propertyId}"
      url = url.replace("{propertyId}", params["propertyId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class PropertyGroupsService {
  /**
   * List propertyGroups
   */
  list(options: IRequestOptions = {}): Promise<PropertyGroup[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/propertyGroups"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create propertyGroup
   */
  create(
    params: {
      /** requestBody */
      body?: PropertyGroupCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PropertyGroup> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/propertyGroups"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update propertyGroup
   */
  update(
    params: {
      /** requestBody */
      body?: PropertyGroupUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PropertyGroup> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/propertyGroups/{propertyGroupId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get propertyGroup by id
   */
  retrieve(
    params: {
      /**  */
      propertyGroupId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PropertyGroup> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/propertyGroups/{propertyGroupId}"
      url = url.replace("{propertyGroupId}", params["propertyGroupId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete propertyGroup by id
   */
  delete(
    params: {
      /**  */
      propertyGroupId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/propertyGroups/{propertyGroupId}"
      url = url.replace("{propertyGroupId}", params["propertyGroupId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class ReservedCommunityTypesService {
  /**
   * List reservedCommunityTypes
   */
  list(options: IRequestOptions = {}): Promise<ReservedCommunityType[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/reservedCommunityTypes"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create reservedCommunityType
   */
  create(
    params: {
      /** requestBody */
      body?: ReservedCommunityTypeCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ReservedCommunityType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/reservedCommunityTypes"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update reservedCommunityType
   */
  update(
    params: {
      /** requestBody */
      body?: ReservedCommunityTypeUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ReservedCommunityType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/reservedCommunityTypes/{reservedCommunityTypeId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get reservedCommunityType by id
   */
  retrieve(
    params: {
      /**  */
      reservedCommunityTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ReservedCommunityType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/reservedCommunityTypes/{reservedCommunityTypeId}"
      url = url.replace("{reservedCommunityTypeId}", params["reservedCommunityTypeId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete reservedCommunityType by id
   */
  delete(
    params: {
      /**  */
      reservedCommunityTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/reservedCommunityTypes/{reservedCommunityTypeId}"
      url = url.replace("{reservedCommunityTypeId}", params["reservedCommunityTypeId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class TranslationsService {
  /**
   * List translations
   */
  list(options: IRequestOptions = {}): Promise<Translation[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/translations"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create translation
   */
  create(
    params: {
      /** requestBody */
      body?: TranslationCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Translation> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/translations"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update translation
   */
  update(
    params: {
      /** requestBody */
      body?: TranslationUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Translation> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/translations/{translationId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get translation by id
   */
  retrieve(
    params: {
      /**  */
      translationId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Translation> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/translations/{translationId}"
      url = url.replace("{translationId}", params["translationId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete translation by id
   */
  delete(
    params: {
      /**  */
      translationId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/translations/{translationId}"
      url = url.replace("{translationId}", params["translationId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class UnitsService {
  /**
   * List units
   */
  list(options: IRequestOptions = {}): Promise<Unit[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/units"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create unit
   */
  create(
    params: {
      /** requestBody */
      body?: UnitCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Unit> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/units"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update unit
   */
  update(
    params: {
      /** requestBody */
      body?: UnitUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Unit> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/units/{unitId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get unit by id
   */
  retrieve(
    params: {
      /**  */
      unitId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Unit> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/units/{unitId}"
      url = url.replace("{unitId}", params["unitId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete unit by id
   */
  delete(
    params: {
      /**  */
      unitId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/units/{unitId}"
      url = url.replace("{unitId}", params["unitId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class UnitTypesService {
  /**
   * List unitTypes
   */
  list(options: IRequestOptions = {}): Promise<UnitType[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitTypes"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create unitType
   */
  create(
    params: {
      /** requestBody */
      body?: UnitTypeCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitTypes"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update unitType
   */
  update(
    params: {
      /** requestBody */
      body?: UnitTypeUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitTypes/{unitTypeId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get unitType by id
   */
  retrieve(
    params: {
      /**  */
      unitTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitTypes/{unitTypeId}"
      url = url.replace("{unitTypeId}", params["unitTypeId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete unitType by id
   */
  delete(
    params: {
      /**  */
      unitTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitTypes/{unitTypeId}"
      url = url.replace("{unitTypeId}", params["unitTypeId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class UnitRentTypesService {
  /**
   * List unitRentTypes
   */
  list(options: IRequestOptions = {}): Promise<UnitRentType[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitRentTypes"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create unitRentType
   */
  create(
    params: {
      /** requestBody */
      body?: UnitRentTypeCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitRentType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitRentTypes"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update unitRentType
   */
  update(
    params: {
      /** requestBody */
      body?: UnitRentTypeUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitRentType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitRentTypes/{unitRentTypeId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get unitRentType by id
   */
  retrieve(
    params: {
      /**  */
      unitRentTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitRentType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitRentTypes/{unitRentTypeId}"
      url = url.replace("{unitRentTypeId}", params["unitRentTypeId"] + "")

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete unitRentType by id
   */
  delete(
    params: {
      /**  */
      unitRentTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitRentTypes/{unitRentTypeId}"
      url = url.replace("{unitRentTypeId}", params["unitRentTypeId"] + "")

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export class UnitAccessibilityPriorityTypesService {
  /**
   * List unitAccessibilityPriorityTypes
   */
  list(options: IRequestOptions = {}): Promise<UnitAccessibilityPriorityType[]> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitAccessibilityPriorityTypes"

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Create unitAccessibilityPriorityType
   */
  create(
    params: {
      /** requestBody */
      body?: UnitAccessibilityPriorityTypeCreate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitAccessibilityPriorityType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitAccessibilityPriorityTypes"

      const configs: IRequestConfig = getConfigs("post", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Update unitAccessibilityPriorityType
   */
  update(
    params: {
      /** requestBody */
      body?: UnitAccessibilityPriorityTypeUpdate
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitAccessibilityPriorityType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitAccessibilityPriorityTypes/{unitAccessibilityPriorityTypeId}"

      const configs: IRequestConfig = getConfigs("put", "application/json", url, options)

      let data = params.body

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Get unitAccessibilityPriorityType by id
   */
  retrieve(
    params: {
      /**  */
      unitAccessibilityPriorityTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UnitAccessibilityPriorityType> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitAccessibilityPriorityTypes/{unitAccessibilityPriorityTypeId}"
      url = url.replace(
        "{unitAccessibilityPriorityTypeId}",
        params["unitAccessibilityPriorityTypeId"] + ""
      )

      const configs: IRequestConfig = getConfigs("get", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete unitAccessibilityPriorityType by id
   */
  delete(
    params: {
      /**  */
      unitAccessibilityPriorityTypeId: string
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + "/unitAccessibilityPriorityTypes/{unitAccessibilityPriorityTypeId}"
      url = url.replace(
        "{unitAccessibilityPriorityTypeId}",
        params["unitAccessibilityPriorityTypeId"] + ""
      )

      const configs: IRequestConfig = getConfigs("delete", "application/json", url, options)

      let data = null

      configs.data = data
      axios(configs, resolve, reject)
    })
  }
}

export interface AmiChartItem {
  /**  */
  percentOfAmi: number

  /**  */
  householdSize: number

  /**  */
  income: number
}

export interface AmiChart {
  /**  */
  items: AmiChartItem[]

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string
}

export interface AmiChartCreate {
  /**  */
  items: AmiChartItem[]

  /**  */
  name: string
}

export interface AmiChartUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  items: AmiChartItem[]

  /**  */
  name: string
}

export interface Id {
  /**  */
  id: string
}

export interface Address {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  placeName?: string

  /**  */
  city?: string

  /**  */
  county?: string

  /**  */
  state?: string

  /**  */
  street?: string

  /**  */
  street2?: string

  /**  */
  zipCode?: string

  /**  */
  latitude?: number

  /**  */
  longitude?: number
}

export interface Applicant {
  /**  */
  address: Address

  /**  */
  workAddress: Address

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  firstName?: string

  /**  */
  middleName?: string

  /**  */
  lastName?: string

  /**  */
  birthMonth?: string

  /**  */
  birthDay?: string

  /**  */
  birthYear?: string

  /**  */
  emailAddress?: string

  /**  */
  noEmail?: boolean

  /**  */
  phoneNumber?: string

  /**  */
  phoneNumberType?: string

  /**  */
  noPhone?: boolean

  /**  */
  workInRegion?: string
}

export interface AlternateContact {
  /**  */
  mailingAddress: Address

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  type?: string

  /**  */
  otherType?: string

  /**  */
  firstName?: string

  /**  */
  lastName?: string

  /**  */
  agency?: string

  /**  */
  phoneNumber?: string

  /**  */
  emailAddress?: string
}

export interface Accessibility {
  /**  */
  mobility?: boolean

  /**  */
  vision?: boolean

  /**  */
  hearing?: boolean

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date
}

export interface Demographics {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  ethnicity?: string

  /**  */
  gender?: string

  /**  */
  sexualOrientation?: string

  /**  */
  howDidYouHear: string[]

  /**  */
  race?: string
}

export interface HouseholdMember {
  /**  */
  address: Address

  /**  */
  workAddress: Address

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  orderId?: number

  /**  */
  firstName?: string

  /**  */
  middleName?: string

  /**  */
  lastName?: string

  /**  */
  birthMonth?: string

  /**  */
  birthDay?: string

  /**  */
  birthYear?: string

  /**  */
  emailAddress?: string

  /**  */
  noEmail?: boolean

  /**  */
  phoneNumber?: string

  /**  */
  phoneNumberType?: string

  /**  */
  noPhone?: boolean

  /**  */
  sameAddress?: string

  /**  */
  relationship?: string

  /**  */
  workInRegion?: string
}

export interface ApplicationPreferenceOption {
  /**  */
  key: string

  /**  */
  checked: boolean

  /**  */
  extraData?: AllExtraDataTypes[]
}

export interface ApplicationPreference {
  /**  */
  key: string

  /**  */
  claimed: boolean

  /**  */
  options: ApplicationPreferenceOption[]
}

export interface Application {
  /**  */
  incomePeriod?: IncomePeriod

  /**  */
  status: ApplicationStatus

  /**  */
  language?: Language

  /**  */
  submissionType: ApplicationSubmissionType

  /**  */
  applicant: Applicant

  /**  */
  listing: Id

  /**  */
  user?: Id

  /**  */
  mailingAddress: Address

  /**  */
  alternateAddress: Address

  /**  */
  alternateContact: AlternateContact

  /**  */
  accessibility: Accessibility

  /**  */
  demographics: Demographics

  /**  */
  householdMembers: HouseholdMember[]

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  deletedAt?: Date

  /**  */
  appUrl?: string

  /**  */
  additionalPhone?: boolean

  /**  */
  additionalPhoneNumber?: string

  /**  */
  additionalPhoneNumberType?: string

  /**  */
  contactPreferences: string[]

  /**  */
  householdSize?: number

  /**  */
  housingStatus?: string

  /**  */
  sendMailToMailingAddress?: boolean

  /**  */
  incomeVouchers?: boolean

  /**  */
  income?: string

  /**  */
  preferredUnit: string[]

  /**  */
  preferences: ApplicationPreference[]

  /**  */
  acceptedTerms?: boolean

  /**  */
  submissionDate?: Date

  /**  */
  markedAsDuplicate: boolean
}

export interface ApplicationFlaggedSet {
  /**  */
  resolvingUser: Id

  /**  */
  applications: Application[]

  /**  */
  listing: Id

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  rule: string

  /**  */
  resolvedTime?: Date

  /**  */
  status: EnumApplicationFlaggedSetStatus

  /**  */
  listingId: string
}

export interface ApplicationFlaggedSetPaginationMeta {
  /**  */
  totalFlagged: number

  /**  */
  currentPage: number

  /**  */
  itemCount: number

  /**  */
  itemsPerPage: number

  /**  */
  totalItems: number

  /**  */
  totalPages: number
}

export interface PaginatedApplicationFlaggedSet {
  /**  */
  items: ApplicationFlaggedSet[]

  /**  */
  meta: ApplicationFlaggedSetPaginationMeta
}

export interface ApplicationFlaggedSetResolve {
  /**  */
  afsId: string

  /**  */
  applications: Id[]
}

export interface BooleanInput {
  /**  */
  type: InputType

  /**  */
  key: string

  /**  */
  value: boolean
}

export interface TextInput {
  /**  */
  type: InputType

  /**  */
  key: string

  /**  */
  value: string
}

export interface AddressCreate {
  /**  */
  placeName?: string

  /**  */
  city?: string

  /**  */
  county?: string

  /**  */
  state?: string

  /**  */
  street?: string

  /**  */
  street2?: string

  /**  */
  zipCode?: string

  /**  */
  latitude?: number

  /**  */
  longitude?: number
}

export interface AddressInput {
  /**  */
  type: InputType

  /**  */
  key: string

  /**  */
  value: AddressCreate
}

export interface ApplicationsApiExtraModel {
  /**  */
  orderBy?: EnumApplicationsApiExtraModelOrderBy

  /**  */
  order?: EnumApplicationsApiExtraModelOrder
}

export interface PaginationMeta {
  /**  */
  currentPage: number

  /**  */
  itemCount: number

  /**  */
  itemsPerPage: number

  /**  */
  totalItems: number

  /**  */
  totalPages: number
}

export interface PaginatedApplication {
  /**  */
  items: Application[]

  /**  */
  meta: PaginationMeta
}

export interface ApplicantCreate {
  /**  */
  address: AddressCreate

  /**  */
  workAddress: AddressCreate

  /**  */
  firstName?: string

  /**  */
  middleName?: string

  /**  */
  lastName?: string

  /**  */
  birthMonth?: string

  /**  */
  birthDay?: string

  /**  */
  birthYear?: string

  /**  */
  emailAddress?: string

  /**  */
  noEmail?: boolean

  /**  */
  phoneNumber?: string

  /**  */
  phoneNumberType?: string

  /**  */
  noPhone?: boolean

  /**  */
  workInRegion?: string
}

export interface AlternateContactCreate {
  /**  */
  mailingAddress: AddressCreate

  /**  */
  type?: string

  /**  */
  otherType?: string

  /**  */
  firstName?: string

  /**  */
  lastName?: string

  /**  */
  agency?: string

  /**  */
  phoneNumber?: string

  /**  */
  emailAddress?: string
}

export interface AccessibilityCreate {
  /**  */
  mobility?: boolean

  /**  */
  vision?: boolean

  /**  */
  hearing?: boolean
}

export interface DemographicsCreate {
  /**  */
  ethnicity?: string

  /**  */
  gender?: string

  /**  */
  sexualOrientation?: string

  /**  */
  howDidYouHear: string[]

  /**  */
  race?: string
}

export interface HouseholdMemberCreate {
  /**  */
  address: AddressCreate

  /**  */
  workAddress: AddressCreate

  /**  */
  orderId?: number

  /**  */
  firstName?: string

  /**  */
  middleName?: string

  /**  */
  lastName?: string

  /**  */
  birthMonth?: string

  /**  */
  birthDay?: string

  /**  */
  birthYear?: string

  /**  */
  emailAddress?: string

  /**  */
  noEmail?: boolean

  /**  */
  phoneNumber?: string

  /**  */
  phoneNumberType?: string

  /**  */
  noPhone?: boolean

  /**  */
  sameAddress?: string

  /**  */
  relationship?: string

  /**  */
  workInRegion?: string
}

export interface ApplicationCreate {
  /**  */
  incomePeriod?: IncomePeriod

  /**  */
  status: ApplicationStatus

  /**  */
  language?: Language

  /**  */
  submissionType: ApplicationSubmissionType

  /**  */
  listing: Id

  /**  */
  applicant: ApplicantCreate

  /**  */
  mailingAddress: AddressCreate

  /**  */
  alternateAddress: AddressCreate

  /**  */
  alternateContact: AlternateContactCreate

  /**  */
  accessibility: AccessibilityCreate

  /**  */
  demographics: DemographicsCreate

  /**  */
  householdMembers: HouseholdMemberCreate[]

  /**  */
  appUrl?: string

  /**  */
  additionalPhone?: boolean

  /**  */
  additionalPhoneNumber?: string

  /**  */
  additionalPhoneNumberType?: string

  /**  */
  contactPreferences: string[]

  /**  */
  householdSize?: number

  /**  */
  housingStatus?: string

  /**  */
  sendMailToMailingAddress?: boolean

  /**  */
  incomeVouchers?: boolean

  /**  */
  income?: string

  /**  */
  preferredUnit: string[]

  /**  */
  preferences: ApplicationPreference[]

  /**  */
  acceptedTerms?: boolean

  /**  */
  submissionDate?: Date
}

export interface AddressUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  placeName?: string

  /**  */
  city?: string

  /**  */
  county?: string

  /**  */
  state?: string

  /**  */
  street?: string

  /**  */
  street2?: string

  /**  */
  zipCode?: string

  /**  */
  latitude?: number

  /**  */
  longitude?: number
}

export interface ApplicantUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  address: AddressUpdate

  /**  */
  workAddress: AddressUpdate

  /**  */
  firstName?: string

  /**  */
  middleName?: string

  /**  */
  lastName?: string

  /**  */
  birthMonth?: string

  /**  */
  birthDay?: string

  /**  */
  birthYear?: string

  /**  */
  emailAddress?: string

  /**  */
  noEmail?: boolean

  /**  */
  phoneNumber?: string

  /**  */
  phoneNumberType?: string

  /**  */
  noPhone?: boolean

  /**  */
  workInRegion?: string
}

export interface AlternateContactUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  mailingAddress: AddressUpdate

  /**  */
  type?: string

  /**  */
  otherType?: string

  /**  */
  firstName?: string

  /**  */
  lastName?: string

  /**  */
  agency?: string

  /**  */
  phoneNumber?: string

  /**  */
  emailAddress?: string
}

export interface AccessibilityUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  mobility?: boolean

  /**  */
  vision?: boolean

  /**  */
  hearing?: boolean
}

export interface DemographicsUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  ethnicity?: string

  /**  */
  gender?: string

  /**  */
  sexualOrientation?: string

  /**  */
  howDidYouHear: string[]

  /**  */
  race?: string
}

export interface HouseholdMemberUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  address: AddressUpdate

  /**  */
  workAddress: AddressUpdate

  /**  */
  orderId?: number

  /**  */
  firstName?: string

  /**  */
  middleName?: string

  /**  */
  lastName?: string

  /**  */
  birthMonth?: string

  /**  */
  birthDay?: string

  /**  */
  birthYear?: string

  /**  */
  emailAddress?: string

  /**  */
  noEmail?: boolean

  /**  */
  phoneNumber?: string

  /**  */
  phoneNumberType?: string

  /**  */
  noPhone?: boolean

  /**  */
  sameAddress?: string

  /**  */
  relationship?: string

  /**  */
  workInRegion?: string
}

export interface ApplicationUpdate {
  /**  */
  incomePeriod?: IncomePeriod

  /**  */
  status: ApplicationStatus

  /**  */
  language?: Language

  /**  */
  submissionType: ApplicationSubmissionType

  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  deletedAt?: Date

  /**  */
  listing: Id

  /**  */
  applicant: ApplicantUpdate

  /**  */
  mailingAddress: AddressUpdate

  /**  */
  alternateAddress: AddressUpdate

  /**  */
  alternateContact: AlternateContactUpdate

  /**  */
  accessibility: AccessibilityUpdate

  /**  */
  demographics: DemographicsUpdate

  /**  */
  householdMembers: HouseholdMemberUpdate[]

  /**  */
  appUrl?: string

  /**  */
  additionalPhone?: boolean

  /**  */
  additionalPhoneNumber?: string

  /**  */
  additionalPhoneNumberType?: string

  /**  */
  contactPreferences: string[]

  /**  */
  householdSize?: number

  /**  */
  housingStatus?: string

  /**  */
  sendMailToMailingAddress?: boolean

  /**  */
  incomeVouchers?: boolean

  /**  */
  income?: string

  /**  */
  preferredUnit: string[]

  /**  */
  preferences: ApplicationPreference[]

  /**  */
  acceptedTerms?: boolean

  /**  */
  submissionDate?: Date
}

export interface AssetCreate {
  /**  */
  fileId: string

  /**  */
  label: string
}

export interface Asset {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  fileId: string

  /**  */
  label: string
}

export interface CreatePresignedUploadMetadata {
  /**  */
  parametersToSign: object
}

export interface CreatePresignedUploadMetadataResponse {
  /**  */
  signature: string
}

export interface PaginatedAssets {
  /**  */
  items: Asset[]

  /**  */
  meta: PaginationMeta
}

export interface Login {
  /**  */
  email: string

  /**  */
  password: string
}

export interface LoginResponse {
  /**  */
  accessToken: string
}

export interface User {
  /**  */
  roles: UserRole[]

  /**  */
  language?: Language

  /**  */
  leasingAgentInListings?: Id[]

  /**  */
  id: string

  /**  */
  confirmedAt?: Date

  /**  */
  email: string

  /**  */
  firstName: string

  /**  */
  middleName?: string

  /**  */
  lastName: string

  /**  */
  dob: Date

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date
}

export interface UserCreate {
  /**  */
  language?: Language

  /**  */
  password: string

  /**  */
  passwordConfirmation: string

  /**  */
  emailConfirmation: string

  /**  */
  appUrl?: string

  /**  */
  email: string

  /**  */
  firstName: string

  /**  */
  middleName?: string

  /**  */
  lastName: string

  /**  */
  dob: Date
}

export interface UserBasic {
  /**  */
  language?: Language

  /**  */
  id: string

  /**  */
  confirmedAt?: Date

  /**  */
  email: string

  /**  */
  firstName: string

  /**  */
  middleName?: string

  /**  */
  lastName: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date
}

export interface Email {
  /**  */
  email: string

  /**  */
  appUrl?: string
}

export interface Status {
  /**  */
  status: string
}

export interface Confirm {
  /**  */
  token: string
}

export interface ForgotPassword {
  /**  */
  email: string

  /**  */
  appUrl?: string
}

export interface ForgotPasswordResponse {
  /**  */
  message: string
}

export interface UpdatePassword {
  /**  */
  password: string

  /**  */
  passwordConfirmation: string

  /**  */
  token: string
}

export interface UserUpdate {
  /**  */
  language?: Language

  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  password?: string

  /**  */
  currentPassword?: string

  /**  */
  confirmedAt?: Date

  /**  */
  email: string

  /**  */
  firstName: string

  /**  */
  middleName?: string

  /**  */
  lastName: string

  /**  */
  dob: Date
}

export interface Jurisdiction {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string
}

export interface JurisdictionCreate {
  /**  */
  name: string
}

export interface JurisdictionUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  name: string
}

export interface ListingFilterParams {
  /**  */
  $comparison: EnumListingFilterParamsComparison

  /**  */
  name?: string

  /**  */
  status?: EnumListingFilterParamsStatus
}

export interface UnitType {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string
}

export interface UnitAccessibilityPriorityType {
  /**  */
  name: string

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date
}

export interface MinMaxCurrency {
  /**  */
  min: string

  /**  */
  max: string
}

export interface MinMax {
  /**  */
  min: number

  /**  */
  max: number
}

export interface UnitSummary {
  /**  */
  unitType: UnitType

  /**  */
  minIncomeRange: MinMaxCurrency

  /**  */
  occupancyRange: MinMax

  /**  */
  rentAsPercentIncomeRange: MinMax

  /**  */
  rentRange: MinMaxCurrency

  /**  */
  totalAvailable: number

  /**  */
  areaRange: MinMax

  /**  */
  floorRange?: MinMax
}

export interface UnitSummaryByReservedType {
  /**  */
  reservedType: string

  /**  */
  byUnitTypeAndRent: UnitSummary[]
}

export interface UnitSummaryByAMI {
  /**  */
  percent: string

  /**  */
  byNonReservedUnitType: UnitSummary[]

  /**  */
  byReservedType: UnitSummaryByReservedType[]
}

export interface HMI {
  /**  */
  columns: object

  /**  */
  rows: object[]
}

export interface PreferenceLink {
  /**  */
  title: string

  /**  */
  url: string
}

export interface FormMetadataExtraData {
  /**  */
  type: InputType

  /**  */
  key: string
}

export interface FormMetadataOptions {
  /**  */
  key: string

  /**  */
  extraData?: FormMetadataExtraData[]

  /**  */
  description: boolean

  /**  */
  exclusive: boolean
}

export interface FormMetadata {
  /**  */
  key: string

  /**  */
  options: FormMetadataOptions[]

  /**  */
  hideGenericDecline: boolean

  /**  */
  customSelectText: string

  /**  */
  hideFromListing: boolean
}

export interface Preference {
  /**  */
  links?: PreferenceLink[]

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  ordinal?: number

  /**  */
  title?: string

  /**  */
  subtitle?: string

  /**  */
  description?: string

  /**  */
  formMetadata?: FormMetadata

  /**  */
  page?: number
}

export interface Asset {
  /**  */
  fileId: string

  /**  */
  label: string

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date
}

export interface ListingEvent {
  /**  */
  type: ListingEventType

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  startTime?: Date

  /**  */
  endTime?: Date

  /**  */
  url?: string

  /**  */
  note?: string

  /**  */
  label?: string

  /**  */
  file?: Asset
}

export interface ReservedCommunityType {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string

  /**  */
  description?: string
}

export interface UnitRentType {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string
}

export interface UnitAccessibilityPriorityType {
  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string
}

export interface Unit {
  /**  */
  status: UnitStatus

  /**  */
  amiChart?: CombinedAmiChartTypes

  /**  */
  unitType?: UnitType

  /**  */
  unitRentType?: UnitRentType

  /**  */
  priorityType?: UnitAccessibilityPriorityType

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  amiPercentage?: string

  /**  */
  annualIncomeMin?: string

  /**  */
  monthlyIncomeMin?: string

  /**  */
  floor?: number

  /**  */
  annualIncomeMax?: string

  /**  */
  maxOccupancy?: number

  /**  */
  minOccupancy?: number

  /**  */
  monthlyRent?: string

  /**  */
  numBathrooms?: number

  /**  */
  numBedrooms?: number

  /**  */
  number?: string

  /**  */
  reservedType?: string

  /**  */
  sqFeet?: string

  /**  */
  monthlyRentAsPercentOfIncome?: string

  /**  */
  bmrProgramChart?: boolean
}

export interface ApplicationMethod {
  /**  */
  type: ApplicationMethodType

  /**  */
  label?: string

  /**  */
  externalReference?: string

  /**  */
  acceptsPostmarkedApplications?: boolean
}

export interface WhatToExpect {
  /**  */
  applicantsWillBeContacted?: string

  /**  */
  allInfoWillBeVerified?: string

  /**  */
  bePreparedIfChosen?: string
}

export interface Listing {
  /**  */
  applicationPickUpAddressType?: ListingApplicationAddressType

  /**  */
  applicationDropOffAddressType?: ListingApplicationAddressType

  /**  */
  status: ListingStatus

  /**  */
  urlSlug: string

  /**  */
  CSVFormattingType: CSVFormattingType

  /**  */
  countyCode: CountyCode

  /**  */
  showWaitlist: boolean

  /**  */
  preferences: Preference[]

  /**  */
  applicationAddress?: CombinedApplicationAddressTypes

  /**  */
  applicationPickUpAddress?: CombinedApplicationPickUpAddressTypes

  /**  */
  applicationDropOffAddress: CombinedApplicationDropOffAddressTypes

  /**  */
  applicationMailingAddress: CombinedApplicationMailingAddressTypes

  /**  */
  events: ListingEvent[]

  /**  */
  image?: CombinedImageTypes

  /**  */
  leasingAgentAddress?: CombinedLeasingAgentAddressTypes

  /**  */
  leasingAgents?: UserBasic[]

  /**  */
  jurisdiction?: Jurisdiction

  /**  */
  reservedCommunityType?: ReservedCommunityType

  /**  */
  result?: CombinedResultTypes

  /**  */
  units: Unit[]

  /**  */
  accessibility?: string

  /**  */
  amenities?: string

  /**  */
  buildingAddress: Address

  /**  */
  buildingTotalUnits?: number

  /**  */
  developer?: string

  /**  */
  householdSizeMax?: number

  /**  */
  householdSizeMin?: number

  /**  */
  neighborhood?: string

  /**  */
  petPolicy?: string

  /**  */
  smokingPolicy?: string

  /**  */
  unitsAvailable?: number

  /**  */
  unitAmenities?: string

  /**  */
  servicesOffered?: string

  /**  */
  yearBuilt?: number

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  additionalApplicationSubmissionNotes?: string

  /**  */
  applicationMethods: ApplicationMethod[]

  /**  */
  assets: AssetCreate[]

  /**  */
  applicationDueDate?: Date

  /**  */
  applicationDueTime?: Date

  /**  */
  applicationOpenDate?: Date

  /**  */
  applicationFee?: string

  /**  */
  applicationOrganization?: string

  /**  */
  applicationPickUpAddressOfficeHours?: string

  /**  */
  applicationDropOffAddressOfficeHours?: string

  /**  */
  buildingSelectionCriteria?: string

  /**  */
  costsNotIncluded?: string

  /**  */
  creditHistory?: string

  /**  */
  criminalBackground?: string

  /**  */
  depositMin?: string

  /**  */
  depositMax?: string

  /**  */
  disableUnitsAccordion?: boolean

  /**  */
  leasingAgentEmail?: string

  /**  */
  leasingAgentName?: string

  /**  */
  leasingAgentOfficeHours?: string

  /**  */
  leasingAgentPhone?: string

  /**  */
  leasingAgentTitle?: string

  /**  */
  name: string

  /**  */
  postmarkedApplicationsReceivedByDate?: Date

  /**  */
  programRules?: string

  /**  */
  rentalAssistance?: string

  /**  */
  rentalHistory?: string

  /**  */
  requiredDocuments?: string

  /**  */
  specialNotes?: string

  /**  */
  waitlistCurrentSize?: number

  /**  */
  waitlistMaxSize?: number

  /**  */
  whatToExpect?: CombinedWhatToExpectTypes

  /**  */
  applicationConfig?: object

  /**  */
  applicationCount?: number

  /**  */
  displayWaitlistSize: boolean

  /**  */
  reservedCommunityMinAge?: number

  /**  */
  resultLink?: string

  /**  */
  isWaitlistOpen?: boolean

  /**  */
  waitlistOpenSpots?: number
}

export interface PreferenceCreate {
  /**  */
  links?: PreferenceLink[]

  /**  */
  ordinal?: number

  /**  */
  title?: string

  /**  */
  subtitle?: string

  /**  */
  description?: string

  /**  */
  formMetadata?: FormMetadata

  /**  */
  page?: number
}

export interface ListingEventCreate {
  /**  */
  type: ListingEventType

  /**  */
  file?: AssetCreate

  /**  */
  startTime?: Date

  /**  */
  endTime?: Date

  /**  */
  url?: string

  /**  */
  note?: string

  /**  */
  label?: string
}

export interface UnitCreate {
  /**  */
  status: UnitStatus

  /**  */
  amiChart?: CombinedAmiChartTypes

  /**  */
  amiPercentage?: string

  /**  */
  annualIncomeMin?: string

  /**  */
  monthlyIncomeMin?: string

  /**  */
  floor?: number

  /**  */
  annualIncomeMax?: string

  /**  */
  maxOccupancy?: number

  /**  */
  minOccupancy?: number

  /**  */
  monthlyRent?: string

  /**  */
  numBathrooms?: number

  /**  */
  numBedrooms?: number

  /**  */
  number?: string

  /**  */
  reservedType?: string

  /**  */
  sqFeet?: string

  /**  */
  monthlyRentAsPercentOfIncome?: string

  /**  */
  bmrProgramChart?: boolean

  /**  */
  unitType?: UnitType

  /**  */
  unitRentType?: UnitRentType

  /**  */
  priorityType?: UnitAccessibilityPriorityType
}

export interface ListingCreate {
  /**  */
  applicationPickUpAddressType?: ListingApplicationAddressType

  /**  */
  applicationDropOffAddressType?: ListingApplicationAddressType

  /**  */
  status: ListingStatus

  /**  */
  CSVFormattingType: CSVFormattingType

  /**  */
  countyCode: CountyCode

  /**  */
  preferences: PreferenceCreate[]

  /**  */
  applicationAddress?: CombinedApplicationAddressTypes

  /**  */
  applicationPickUpAddress?: CombinedApplicationPickUpAddressTypes

  /**  */
  applicationDropOffAddress: CombinedApplicationDropOffAddressTypes

  /**  */
  applicationMailingAddress: CombinedApplicationMailingAddressTypes

  /**  */
  events: ListingEventCreate[]

  /**  */
  image?: CombinedImageTypes

  /**  */
  leasingAgentAddress?: CombinedLeasingAgentAddressTypes

  /**  */
  leasingAgents?: Id[]

  /**  */
  units: UnitCreate[]

  /**  */
  accessibility?: string

  /**  */
  amenities?: string

  /**  */
  buildingAddress: AddressCreate

  /**  */
  buildingTotalUnits?: number

  /**  */
  developer?: string

  /**  */
  householdSizeMax?: number

  /**  */
  householdSizeMin?: number

  /**  */
  neighborhood?: string

  /**  */
  petPolicy?: string

  /**  */
  smokingPolicy?: string

  /**  */
  unitsAvailable?: number

  /**  */
  unitAmenities?: string

  /**  */
  servicesOffered?: string

  /**  */
  yearBuilt?: number

  /**  */
  jurisdiction?: CombinedJurisdictionTypes

  /**  */
  reservedCommunityType?: Id

  /**  */
  result?: CombinedResultTypes

  /**  */
  additionalApplicationSubmissionNotes?: string

  /**  */
  applicationMethods: ApplicationMethod[]

  /**  */
  assets: AssetCreate[]

  /**  */
  applicationDueDate?: Date

  /**  */
  applicationDueTime?: Date

  /**  */
  applicationOpenDate?: Date

  /**  */
  applicationFee?: string

  /**  */
  applicationOrganization?: string

  /**  */
  applicationPickUpAddressOfficeHours?: string

  /**  */
  applicationDropOffAddressOfficeHours?: string

  /**  */
  buildingSelectionCriteria?: string

  /**  */
  costsNotIncluded?: string

  /**  */
  creditHistory?: string

  /**  */
  criminalBackground?: string

  /**  */
  depositMin?: string

  /**  */
  depositMax?: string

  /**  */
  disableUnitsAccordion?: boolean

  /**  */
  leasingAgentEmail?: string

  /**  */
  leasingAgentName?: string

  /**  */
  leasingAgentOfficeHours?: string

  /**  */
  leasingAgentPhone?: string

  /**  */
  leasingAgentTitle?: string

  /**  */
  name: string

  /**  */
  postmarkedApplicationsReceivedByDate?: Date

  /**  */
  programRules?: string

  /**  */
  rentalAssistance?: string

  /**  */
  rentalHistory?: string

  /**  */
  requiredDocuments?: string

  /**  */
  specialNotes?: string

  /**  */
  waitlistCurrentSize?: number

  /**  */
  waitlistMaxSize?: number

  /**  */
  whatToExpect?: CombinedWhatToExpectTypes

  /**  */
  applicationConfig?: object

  /**  */
  displayWaitlistSize: boolean

  /**  */
  reservedCommunityMinAge?: number

  /**  */
  resultLink?: string

  /**  */
  isWaitlistOpen?: boolean

  /**  */
  waitlistOpenSpots?: number
}

export interface PreferenceUpdate {
  /**  */
  links?: PreferenceLink[]

  /**  */
  ordinal?: number

  /**  */
  title?: string

  /**  */
  subtitle?: string

  /**  */
  description?: string

  /**  */
  formMetadata?: FormMetadata

  /**  */
  page?: number

  /**  */
  id: string
}

export interface AssetUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  fileId: string

  /**  */
  label: string
}

export interface ListingEventUpdate {
  /**  */
  type: ListingEventType

  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  file?: AssetUpdate

  /**  */
  startTime?: Date

  /**  */
  endTime?: Date

  /**  */
  url?: string

  /**  */
  note?: string

  /**  */
  label?: string
}

export interface UnitUpdate {
  /**  */
  status: UnitStatus

  /**  */
  amiChart?: CombinedAmiChartTypes

  /**  */
  amiPercentage?: string

  /**  */
  annualIncomeMin?: string

  /**  */
  monthlyIncomeMin?: string

  /**  */
  floor?: number

  /**  */
  annualIncomeMax?: string

  /**  */
  maxOccupancy?: number

  /**  */
  minOccupancy?: number

  /**  */
  monthlyRent?: string

  /**  */
  numBathrooms?: number

  /**  */
  numBedrooms?: number

  /**  */
  number?: string

  /**  */
  reservedType?: string

  /**  */
  sqFeet?: string

  /**  */
  monthlyRentAsPercentOfIncome?: string

  /**  */
  bmrProgramChart?: boolean

  /**  */
  unitType?: UnitType

  /**  */
  unitRentType?: UnitRentType

  /**  */
  priorityType?: UnitAccessibilityPriorityType

  /**  */
  id: string
}

export interface ListingUpdate {
  /**  */
  applicationPickUpAddressType?: ListingApplicationAddressType

  /**  */
  applicationDropOffAddressType?: ListingApplicationAddressType

  /**  */
  status: ListingStatus

  /**  */
  CSVFormattingType: CSVFormattingType

  /**  */
  countyCode: CountyCode

  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  preferences: PreferenceUpdate[]

  /**  */
  applicationAddress?: CombinedApplicationAddressTypes

  /**  */
  applicationPickUpAddress?: CombinedApplicationPickUpAddressTypes

  /**  */
  applicationDropOffAddress: CombinedApplicationDropOffAddressTypes

  /**  */
  applicationMailingAddress: CombinedApplicationMailingAddressTypes

  /**  */
  events: ListingEventUpdate[]

  /**  */
  image?: AssetUpdate

  /**  */
  leasingAgentAddress?: CombinedLeasingAgentAddressTypes

  /**  */
  leasingAgents?: Id[]

  /**  */
  units: UnitUpdate[]

  /**  */
  accessibility?: string

  /**  */
  amenities?: string

  /**  */
  buildingAddress: AddressUpdate

  /**  */
  buildingTotalUnits?: number

  /**  */
  developer?: string

  /**  */
  householdSizeMax?: number

  /**  */
  householdSizeMin?: number

  /**  */
  neighborhood?: string

  /**  */
  petPolicy?: string

  /**  */
  smokingPolicy?: string

  /**  */
  unitsAvailable?: number

  /**  */
  unitAmenities?: string

  /**  */
  servicesOffered?: string

  /**  */
  yearBuilt?: number

  /**  */
  jurisdiction?: Id

  /**  */
  reservedCommunityType?: Id

  /**  */
  result?: AssetUpdate

  /**  */
  additionalApplicationSubmissionNotes?: string

  /**  */
  applicationMethods: ApplicationMethod[]

  /**  */
  assets: AssetCreate[]

  /**  */
  applicationDueDate?: Date

  /**  */
  applicationDueTime?: Date

  /**  */
  applicationOpenDate?: Date

  /**  */
  applicationFee?: string

  /**  */
  applicationOrganization?: string

  /**  */
  applicationPickUpAddressOfficeHours?: string

  /**  */
  applicationDropOffAddressOfficeHours?: string

  /**  */
  buildingSelectionCriteria?: string

  /**  */
  costsNotIncluded?: string

  /**  */
  creditHistory?: string

  /**  */
  criminalBackground?: string

  /**  */
  depositMin?: string

  /**  */
  depositMax?: string

  /**  */
  disableUnitsAccordion?: boolean

  /**  */
  leasingAgentEmail?: string

  /**  */
  leasingAgentName?: string

  /**  */
  leasingAgentOfficeHours?: string

  /**  */
  leasingAgentPhone?: string

  /**  */
  leasingAgentTitle?: string

  /**  */
  name: string

  /**  */
  postmarkedApplicationsReceivedByDate?: Date

  /**  */
  programRules?: string

  /**  */
  rentalAssistance?: string

  /**  */
  rentalHistory?: string

  /**  */
  requiredDocuments?: string

  /**  */
  specialNotes?: string

  /**  */
  waitlistCurrentSize?: number

  /**  */
  waitlistMaxSize?: number

  /**  */
  whatToExpect?: CombinedWhatToExpectTypes

  /**  */
  applicationConfig?: object

  /**  */
  displayWaitlistSize: boolean

  /**  */
  reservedCommunityMinAge?: number

  /**  */
  resultLink?: string

  /**  */
  isWaitlistOpen?: boolean

  /**  */
  waitlistOpenSpots?: number
}

export interface Property {
  /**  */
  units: Unit[]

  /**  */
  buildingAddress: Address

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  accessibility?: string

  /**  */
  amenities?: string

  /**  */
  buildingTotalUnits?: number

  /**  */
  developer?: string

  /**  */
  householdSizeMax?: number

  /**  */
  householdSizeMin?: number

  /**  */
  neighborhood?: string

  /**  */
  petPolicy?: string

  /**  */
  smokingPolicy?: string

  /**  */
  unitsAvailable?: number

  /**  */
  unitAmenities?: string

  /**  */
  servicesOffered?: string

  /**  */
  yearBuilt?: number
}

export interface PropertyCreate {
  /**  */
  buildingAddress: AddressUpdate

  /**  */
  units: UnitCreate[]

  /**  */
  accessibility?: string

  /**  */
  amenities?: string

  /**  */
  buildingTotalUnits?: number

  /**  */
  developer?: string

  /**  */
  householdSizeMax?: number

  /**  */
  householdSizeMin?: number

  /**  */
  neighborhood?: string

  /**  */
  petPolicy?: string

  /**  */
  smokingPolicy?: string

  /**  */
  unitsAvailable?: number

  /**  */
  unitAmenities?: string

  /**  */
  servicesOffered?: string

  /**  */
  yearBuilt?: number
}

export interface PropertyUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  buildingAddress: AddressUpdate

  /**  */
  units: UnitUpdate[]

  /**  */
  accessibility?: string

  /**  */
  amenities?: string

  /**  */
  buildingTotalUnits?: number

  /**  */
  developer?: string

  /**  */
  householdSizeMax?: number

  /**  */
  householdSizeMin?: number

  /**  */
  neighborhood?: string

  /**  */
  petPolicy?: string

  /**  */
  smokingPolicy?: string

  /**  */
  unitsAvailable?: number

  /**  */
  unitAmenities?: string

  /**  */
  servicesOffered?: string

  /**  */
  yearBuilt?: number
}

export interface PropertyGroup {
  /**  */
  properties: Id[]

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  name: string
}

export interface PropertyGroupCreate {
  /**  */
  name: string

  /**  */
  properties: Id[]
}

export interface PropertyGroupUpdate {
  /**  */
  name: string

  /**  */
  properties: Id[]

  /**  */
  id: string
}

export interface ReservedCommunityTypeCreate {
  /**  */
  name: string

  /**  */
  description?: string
}

export interface ReservedCommunityTypeUpdate {
  /**  */
  name: string

  /**  */
  description?: string

  /**  */
  id: string
}

export interface Translation {
  /**  */
  countyCode: CountyCode

  /**  */
  language: Language

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  translations: object
}

export interface TranslationCreate {
  /**  */
  countyCode: CountyCode

  /**  */
  language: Language

  /**  */
  translations: object
}

export interface TranslationUpdate {
  /**  */
  countyCode: CountyCode

  /**  */
  language: Language

  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  translations: object
}

export interface UnitTypeCreate {
  /**  */
  name: string
}

export interface UnitTypeUpdate {
  /**  */
  name: string

  /**  */
  id: string
}

export interface UnitRentTypeCreate {
  /**  */
  name: string
}

export interface UnitRentTypeUpdate {
  /**  */
  name: string

  /**  */
  id: string
}

export interface UnitAccessibilityPriorityTypeCreate {
  /**  */
  name: string
}

export interface UnitAccessibilityPriorityTypeUpdate {
  /**  */
  name: string

  /**  */
  id: string
}

export enum IncomePeriod {
  "perMonth" = "perMonth",
  "perYear" = "perYear",
}

export enum ApplicationStatus {
  "draft" = "draft",
  "submitted" = "submitted",
  "removed" = "removed",
}

export enum Language {
  "en" = "en",
  "es" = "es",
  "vi" = "vi",
  "zh" = "zh",
}

export enum ApplicationSubmissionType {
  "paper" = "paper",
  "electronical" = "electronical",
}
export type AllExtraDataTypes = BooleanInput | TextInput | AddressInput
export enum EnumApplicationFlaggedSetStatus {
  "flagged" = "flagged",
  "resolved" = "resolved",
}
export enum InputType {
  "boolean" = "boolean",
  "text" = "text",
  "address" = "address",
  "hhMemberSelect" = "hhMemberSelect",
}
export enum EnumApplicationsApiExtraModelOrderBy {
  "firstName" = "firstName",
  "lastName" = "lastName",
  "submissionDate" = "submissionDate",
  "createdAt" = "createdAt",
}
export enum EnumApplicationsApiExtraModelOrder {
  "ASC" = "ASC",
  "DESC" = "DESC",
}
export enum UserRole {
  "user" = "user",
  "admin" = "admin",
}
export enum EnumListingFilterParamsComparison {
  "=" = "=",
  "<>" = "<>",
}
export enum EnumListingFilterParamsStatus {
  "active" = "active",
  "pending" = "pending",
  "closed" = "closed",
}
export enum ListingApplicationAddressType {
  "leasingAgent" = "leasingAgent",
  "mailingAddress" = "mailingAddress",
}

export enum ListingStatus {
  "active" = "active",
  "pending" = "pending",
  "closed" = "closed",
}

export enum CSVFormattingType {
  "basic" = "basic",
  "withDisplaceeNameAndAddress" = "withDisplaceeNameAndAddress",
  "ohaFormat" = "ohaFormat",
}

export enum CountyCode {
  "Alameda" = "Alameda",
  "San Mateo" = "San Mateo",
  "San Jose" = "San Jose",
}

export enum ListingEventType {
  "openHouse" = "openHouse",
  "publicLottery" = "publicLottery",
  "lotteryResults" = "lotteryResults",
}

export enum UnitStatus {
  "unknown" = "unknown",
  "available" = "available",
  "occupied" = "occupied",
}
export type CombinedAmiChartTypes = AmiChart
export enum ApplicationMethodType {
  "Internal" = "Internal",
  "FileDownload" = "FileDownload",
  "ExternalLink" = "ExternalLink",
  "PaperPickup" = "PaperPickup",
}
export type CombinedApplicationAddressTypes = AddressUpdate
export type CombinedApplicationPickUpAddressTypes = AddressUpdate
export type CombinedApplicationDropOffAddressTypes = AddressUpdate
export type CombinedApplicationMailingAddressTypes = AddressUpdate
export type CombinedImageTypes = AssetCreate
export type CombinedLeasingAgentAddressTypes = AddressUpdate
export type CombinedResultTypes = AssetCreate
export type CombinedWhatToExpectTypes = WhatToExpect
export type CombinedJurisdictionTypes = Id
