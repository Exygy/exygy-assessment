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

export interface ListingFilterParams {
  /**  */
  $comparison: EnumListingFilterParamsComparison

  /**  */
  name?: string
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

export interface Unit {
  /**  */
  unitType?: UnitType

  /**  */
  id: string

  /**  */
  createdAt: Date

  /**  */
  updatedAt: Date

  /**  */
  monthlyIncomeMin?: string

  /**  */
  monthlyRent?: string

  /**  */
  monthlyRentAsPercentOfIncome?: string
}

export interface Listing {
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
  applicationDueDate?: Date

  /**  */
  name: string
}

export interface UnitCreate {
  /**  */
  monthlyIncomeMin?: string

  /**  */
  monthlyRent?: string

  /**  */
  monthlyRentAsPercentOfIncome?: string

  /**  */
  unitType?: UnitType
}

export interface ListingCreate {
  /**  */
  units: UnitCreate[]

  /**  */
  buildingAddress: AddressCreate

  /**  */
  applicationDueDate?: Date

  /**  */
  name: string
}

export interface UnitUpdate {
  /**  */
  monthlyIncomeMin?: string

  /**  */
  monthlyRent?: string

  /**  */
  monthlyRentAsPercentOfIncome?: string

  /**  */
  unitType?: UnitType

  /**  */
  id: string
}

export interface ListingUpdate {
  /**  */
  id?: string

  /**  */
  createdAt?: Date

  /**  */
  updatedAt?: Date

  /**  */
  units: UnitUpdate[]

  /**  */
  applicationDueDate?: Date

  /**  */
  name: string
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
}

export interface PropertyCreate {
  /**  */
  buildingAddress: AddressUpdate

  /**  */
  units: UnitCreate[]
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

export enum Language {
  "en" = "en",
  "es" = "es",
  "vi" = "vi",
  "zh" = "zh",
}

export enum EnumListingFilterParamsComparison {
  "=" = "=",
  "<>" = "<>",
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
