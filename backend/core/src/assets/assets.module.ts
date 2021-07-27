import { Module } from "@nestjs/common"
import { AssetsController } from "./assets.controller"
import { AssetsService } from "./services/assets.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import { SharedModule } from "../shared/shared.module"
import { Asset } from "./entities/asset.entity"

@Module({
  controllers: [AssetsController],
  providers: [AssetsService],
  imports: [TypeOrmModule.forFeature([Asset]), SharedModule],
})
export class AssetsModule {}
