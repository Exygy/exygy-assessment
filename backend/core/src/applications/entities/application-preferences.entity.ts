import { Expose, Type } from "class-transformer"
import { ArrayMaxSize, IsBoolean, IsString, MaxLength, ValidateNested } from "class-validator"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"
import { ApplicationPreferenceOption } from "../types/application-preference-option"

export class ApplicationPreference {
  @Expose()
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(128, { groups: [ValidationsGroupsEnum.default] })
  key: string

  @Expose()
  @IsBoolean({ groups: [ValidationsGroupsEnum.default] })
  claimed: boolean

  @Expose()
  @ArrayMaxSize(64, { groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default], each: true })
  @Type(() => ApplicationPreferenceOption)
  options: Array<ApplicationPreferenceOption>
}
