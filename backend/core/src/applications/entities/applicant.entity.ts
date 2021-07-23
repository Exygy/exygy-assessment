import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { AbstractEntity } from "../../shared/entities/abstract.entity"
import { Expose, Type } from "class-transformer"
import {
  IsBoolean,
  IsDefined,
  IsIn,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsEmail,
  MinLength,
} from "class-validator"
import { Address } from "../../shared/entities/address.entity"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"

@Entity()
export class Applicant extends AbstractEntity {
  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(64, { groups: [ValidationsGroupsEnum.default] })
  @MinLength(1, { groups: [ValidationsGroupsEnum.default] })
  firstName?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(64, { groups: [ValidationsGroupsEnum.default] })
  middleName?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(64, { groups: [ValidationsGroupsEnum.default] })
  @MinLength(1, { groups: [ValidationsGroupsEnum.default] })
  lastName?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(8, { groups: [ValidationsGroupsEnum.default] })
  birthMonth?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(8, { groups: [ValidationsGroupsEnum.default] })
  birthDay?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(8, { groups: [ValidationsGroupsEnum.default] })
  birthYear?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsEmail({}, { groups: [ValidationsGroupsEnum.default] })
  emailAddress?: string | null

  @Column({ type: "bool", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsBoolean({ groups: [ValidationsGroupsEnum.default] })
  noEmail?: boolean | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(16, { groups: [ValidationsGroupsEnum.default] })
  phoneNumber?: string | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.partners] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @MaxLength(16, { groups: [ValidationsGroupsEnum.default] })
  phoneNumberType?: string | null

  @Column({ type: "bool", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsBoolean({ groups: [ValidationsGroupsEnum.default] })
  noPhone?: boolean | null

  @Column({ type: "text", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsIn(["yes", "no"], { groups: [ValidationsGroupsEnum.default] })
  workInRegion?: string | null

  @OneToOne(() => Address, { eager: true, cascade: true })
  @JoinColumn()
  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Address)
  workAddress: Address

  @OneToOne(() => Address, { eager: true, cascade: true })
  @JoinColumn()
  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Address)
  address: Address
}
