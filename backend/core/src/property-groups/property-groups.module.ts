import { Module } from "@nestjs/common"
import { PropertyGroupsController } from "./property-groups.controller"
import { PropertyGroupsService } from "./property-groups.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PropertyGroup } from "./entities/property-group.entity"

@Module({
  imports: [TypeOrmModule.forFeature([PropertyGroup])],
  controllers: [PropertyGroupsController],
  providers: [PropertyGroupsService],
})
export class PropertyGroupsModule {}
