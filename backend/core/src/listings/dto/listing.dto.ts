import { Listing } from "../entities/listing.entity"
import { Expose, Transform, Type } from "class-transformer"
import {
  ArrayMaxSize,
  IsDate,
  IsDefined,
  IsOptional,
  IsUUID,
  ValidateNested,
} from "class-validator"
import { ApiProperty, OmitType } from "@nestjs/swagger"
import { AddressCreateDto, AddressDto, AddressUpdateDto } from "../../shared/dto/address.dto"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"
import { BaseFilter } from "../../shared/dto/filter.dto"
import { UnitCreateDto, UnitDto, UnitUpdateDto } from "../../units/dto/unit.dto"

export class ListingDto extends OmitType(Listing, ["property"] as const) {
  @Expose()
  @Type(() => UnitDto)
  @Transform(
    (value, obj: Listing) => {
      return obj.property?.units
    },
    { toClassOnly: true }
  )
  units: UnitDto[]

  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => AddressDto)
  @Transform(
    (value, obj: Listing) => {
      return obj.property.buildingAddress
    },
    { toClassOnly: true }
  )
  buildingAddress: AddressDto
}

export class ListingCreateDto extends OmitType(ListingDto, [
  "id",
  "createdAt",
  "updatedAt",
  "units",
  "buildingAddress",
] as const) {
  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default], each: true })
  @ArrayMaxSize(256, { groups: [ValidationsGroupsEnum.default] })
  @Type(() => UnitCreateDto)
  units: UnitCreateDto[]

  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => AddressCreateDto)
  buildingAddress: AddressCreateDto
}

export class ListingUpdateDto extends OmitType(ListingDto, [
  "id",
  "createdAt",
  "updatedAt",
  "units",
  "buildingAddress",
] as const) {
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsUUID(4, { groups: [ValidationsGroupsEnum.default] })
  id?: string

  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  createdAt?: Date

  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  updatedAt?: Date

  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default], each: true })
  @ArrayMaxSize(256, { groups: [ValidationsGroupsEnum.default] })
  @Type(() => UnitUpdateDto)
  units: UnitUpdateDto[]

  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => AddressUpdateDto)
  buildingAddress: AddressUpdateDto
}

// add other listing filter params here
export class ListingFilterParams extends BaseFilter {
  @Expose()
  @ApiProperty({
    type: String,
    example: "Coliseum",
    required: false,
  })
  name?: string
}
