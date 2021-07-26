import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UnitsService } from "./units.service"
import { UnitsController } from "./units.controller"
import { Unit } from "./entities/unit.entity"
import { UnitType } from "../unit-types/entities/unit-type.entity"

@Module({
  imports: [TypeOrmModule.forFeature([Unit, UnitType])],
  providers: [UnitsService],
  exports: [UnitsService],
  controllers: [UnitsController],
})
export class UnitsModule {}
