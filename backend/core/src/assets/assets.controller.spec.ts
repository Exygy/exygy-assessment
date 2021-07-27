import { Test, TestingModule } from "@nestjs/testing"
import { AssetsController } from "./assets.controller"
import dbOptions = require("../../ormconfig.test")
import { TypeOrmModule } from "@nestjs/typeorm"
import { AssetsService } from "./services/assets.service"

describe("AssetsController", () => {
  let controller: AssetsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetsController],
      imports: [TypeOrmModule.forRoot(dbOptions)],
      providers: [{ provide: AssetsService, useValue: {} }],
    }).compile()

    controller = module.get<AssetsController>(AssetsController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })
})
