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
import { mapTo } from "../shared/mapTo"
import { defaultValidationPipeOptions } from "../shared/default-validation-pipe-options"
import { TranslationsService } from "./translations.service"
import { TranslationCreateDto, TranslationDto, TranslationUpdateDto } from "./dto/translation.dto"

@Controller("/translations")
@ApiTags("translations")
@ApiBearerAuth()
@UsePipes(new ValidationPipe(defaultValidationPipeOptions))
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) {}

  @Get()
  @ApiOperation({ summary: "List translations", operationId: "list" })
  async list(): Promise<TranslationDto[]> {
    return mapTo(TranslationDto, await this.translationsService.list())
  }

  @Post()
  @ApiOperation({ summary: "Create translation", operationId: "create" })
  async create(@Body() translation: TranslationCreateDto): Promise<TranslationDto> {
    return mapTo(TranslationDto, await this.translationsService.create(translation))
  }

  @Put(`:translationId`)
  @ApiOperation({ summary: "Update translation", operationId: "update" })
  async update(@Body() translation: TranslationUpdateDto): Promise<TranslationDto> {
    return mapTo(TranslationDto, await this.translationsService.update(translation))
  }

  @Get(`:translationId`)
  @ApiOperation({ summary: "Get translation by id", operationId: "retrieve" })
  async retrieve(@Param("translationId") translationId: string): Promise<TranslationDto> {
    return mapTo(
      TranslationDto,
      await this.translationsService.findOne({ where: { id: translationId } })
    )
  }

  @Delete(`:translationId`)
  @ApiOperation({ summary: "Delete translation by id", operationId: "delete" })
  async delete(@Param("translationId") translationId: string): Promise<void> {
    return await this.translationsService.delete(translationId)
  }
}
