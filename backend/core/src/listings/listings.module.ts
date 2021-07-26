import { CacheModule, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ListingsService } from "./listings.service"
import { ListingsController } from "./listings.controller"
import { Listing } from "./entities/listing.entity"
import { Unit } from "../units/entities/unit.entity"
import { Property } from "../property/entities/property.entity"

@Module({
  imports: [
    CacheModule.register({
      ttl: 24 * 60 * 60,
      max: 10,
    }),
    TypeOrmModule.forFeature([Listing, Unit, Property]),
  ],
  providers: [ListingsService],
  exports: [ListingsService],
  controllers: [ListingsController],
})
export class ListingsModule {}
