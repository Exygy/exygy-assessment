import { Expose, Type } from "class-transformer"
import { IsDefined, IsString, ValidateNested } from "class-validator"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"
import { UnitSummary } from "./unit-summary"
import { UnitSummaryByReservedType } from "./unit-summary-by-reserved-type"
import { ApiProperty } from "@nestjs/swagger"

export class UnitSummaryByAMI {
  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @ApiProperty()
  percent: string

  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default], each: true })
  @Type(() => UnitSummary)
  @ApiProperty({ type: [UnitSummary] })
  byNonReservedUnitType: UnitSummary[]

  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default], each: true })
  @Type(() => UnitSummaryByReservedType)
  @ApiProperty({ type: [UnitSummaryByReservedType] })
  byReservedType: UnitSummaryByReservedType[]
}
