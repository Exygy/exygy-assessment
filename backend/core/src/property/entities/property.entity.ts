import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { Expose, Type } from "class-transformer"
import { IsDate, IsDefined, IsString, IsUUID, ValidateNested } from "class-validator"
import { Unit } from "../../units/entities/unit.entity"
import { Address } from "../../shared/entities/address.entity"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"

@Entity()
export class Property {
  @PrimaryGeneratedColumn("uuid")
  @Expose()
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  @IsUUID(4, { groups: [ValidationsGroupsEnum.default] })
  id: string

  @CreateDateColumn()
  @Expose()
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  createdAt: Date

  @UpdateDateColumn()
  @Expose()
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  updatedAt: Date

  @OneToMany(() => Unit, (unit) => unit.property, { eager: true, cascade: true })
  units: Unit[]

  @OneToOne(() => Address, { eager: true, cascade: true })
  @JoinColumn()
  @Expose()
  @IsDefined({ groups: [ValidationsGroupsEnum.default] })
  @ValidateNested({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Address)
  buildingAddress: Address
}
