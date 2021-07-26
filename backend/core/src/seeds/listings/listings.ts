import { PropertyCreateDto } from "../../property/dto/property.dto"
import { UnitCreateDto } from "../../units/dto/unit.dto"
import { ListingCreateDto } from "../../listings/dto/listing.dto"
import { AssetCreateDto } from "../../assets/dto/asset.dto"
import { BaseEntity } from "typeorm"

export type PropertySeedType = Omit<PropertyCreateDto, "propertyGroups" | "listings" | "units">

export type UnitSeedType = Omit<UnitCreateDto, "property">

export type ListingSeedType = Omit<
  ListingCreateDto,
  keyof BaseEntity | "property" | "units" | "buildingAddress"
>

export type AssetDtoSeedType = Omit<AssetCreateDto, "listing">

// Properties that are ommited in DTOS derived types are relations and getters
export interface ListingSeed {
  units: Array<UnitSeedType>
  property: PropertySeedType
  listing: ListingSeedType
}
