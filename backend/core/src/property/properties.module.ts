import { Module } from "@nestjs/common"
import { PropertiesController } from "./properties.controller"
import { PropertiesService } from "./properties.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Property } from "./entities/property.entity"

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
