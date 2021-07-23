import { DynamicModule, Module } from "@nestjs/common"

import { TypeOrmModule } from "@nestjs/typeorm"
import dbOptions = require("../../ormconfig")
import testDbOptions = require("../../ormconfig.test")
import { ThrottlerModule } from "@nestjs/throttler"
import { SharedModule } from "../shared/shared.module"
import { AuthModule } from "../auth/auth.module"
import { ApplicationsModule } from "../applications/applications.module"
import { ListingsModule } from "../listings/listings.module"
import { AmiChartsModule } from "../ami-charts/ami-charts.module"
import { Listing } from "../listings/entities/listing.entity"
import { UnitAccessibilityPriorityType } from "../unit-accessbility-priority-types/entities/unit-accessibility-priority-type.entity"
import { UnitType } from "../unit-types/entities/unit-type.entity"
import { UnitRentType } from "../unit-rent-types/entities/unit-rent-type.entity"
import { AmiChart } from "../ami-charts/entities/ami-chart.entity"
import { Property } from "../property/entities/property.entity"
import { Unit } from "../units/entities/unit.entity"
import { User } from "../auth/entities/user.entity"
import { ListingGondorSeed } from "../seeds/listings/listing-gondor-seed"
import { ListingShireSeed } from "../seeds/listings/listing-shire-seed"
import { Preference } from "../preferences/entities/preference.entity"
import { ListingRivendellSeed } from "../seeds/listings/listing-rivendell-seed"

@Module({})
export class SeederModule {
  static forRoot(options: { test: boolean }): DynamicModule {
    const dbConfig = options.test ? testDbOptions : dbOptions
    return {
      module: SeederModule,
      imports: [
        SharedModule,
        TypeOrmModule.forRoot({
          ...dbConfig,
        }),
        TypeOrmModule.forFeature([
          Listing,
          Preference,
          UnitAccessibilityPriorityType,
          UnitType,
          UnitRentType,
          AmiChart,
          Property,
          Unit,
          User,
        ]),
        ThrottlerModule.forRoot({
          ttl: 60,
          limit: 5,
          ignoreUserAgents: [/^node-superagent.*$/],
        }),
        ApplicationsModule,
        AuthModule,
        ListingsModule,
        AmiChartsModule,
      ],
      providers: [ListingShireSeed, ListingGondorSeed, ListingRivendellSeed],
    }
  }
}
