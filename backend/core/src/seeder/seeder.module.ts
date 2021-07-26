import { DynamicModule, Module } from "@nestjs/common"

import { TypeOrmModule } from "@nestjs/typeorm"
import dbOptions = require("../../ormconfig")
import testDbOptions = require("../../ormconfig.test")
import { ThrottlerModule } from "@nestjs/throttler"
import { SharedModule } from "../shared/shared.module"
import { ListingsModule } from "../listings/listings.module"
import { Listing } from "../listings/entities/listing.entity"
import { UnitType } from "../unit-types/entities/unit-type.entity"
import { Property } from "../property/entities/property.entity"
import { Unit } from "../units/entities/unit.entity"
import { ListingGondorSeed } from "../seeds/listings/listing-gondor-seed"
import { ListingShireSeed } from "../seeds/listings/listing-shire-seed"
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
        TypeOrmModule.forFeature([Listing, UnitType, Property, Unit]),
        ThrottlerModule.forRoot({
          ttl: 60,
          limit: 5,
          ignoreUserAgents: [/^node-superagent.*$/],
        }),
        ListingsModule,
      ],
      providers: [ListingShireSeed, ListingGondorSeed, ListingRivendellSeed],
    }
  }
}
