import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger"
import { UnitsService } from "./units.service"
import { UnitCreateDto, UnitDto, UnitUpdateDto } from "./dto/unit.dto"
import { mapTo } from "../shared/mapTo"
import { defaultValidationPipeOptions } from "../shared/default-validation-pipe-options"

@Controller("/units")
@ApiTags("units")
@ApiBearerAuth()
@UsePipes(new ValidationPipe(defaultValidationPipeOptions))
export class UnitsController {
  constructor(private readonly unitsService: UnitsService) {}

  @Get()
  @ApiOperation({ summary: "List units", operationId: "list" })
  async list(): Promise<UnitDto[]> {
    return mapTo(UnitDto, await this.unitsService.list())
  }

  @Post()
  @ApiOperation({ summary: "Create unit", operationId: "create" })
  async create(@Body() unit: UnitCreateDto): Promise<UnitDto> {
    return mapTo(UnitDto, await this.unitsService.create(unit))
  }

  @Put(`:unitId`)
  @ApiOperation({ summary: "Update unit", operationId: "update" })
  async update(@Body() unit: UnitUpdateDto): Promise<UnitDto> {
    return mapTo(UnitDto, await this.unitsService.update(unit))
  }

  @Get(`:unitId`)
  @ApiOperation({ summary: "Get unit by id", operationId: "retrieve" })
  async retrieve(@Param("unitId") unitId: string): Promise<UnitDto> {
    return mapTo(UnitDto, await this.unitsService.findOne({ where: { id: unitId } }))
  }

  @Delete(`:unitId`)
  @ApiOperation({ summary: "Delete unit by id", operationId: "delete" })
  async delete(@Param("unitId") unitId: string): Promise<void> {
    return await this.unitsService.delete(unitId)
  }
}
