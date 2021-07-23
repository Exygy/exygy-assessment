import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common"
import { ApiBearerAuth, ApiExtraModels, ApiOperation, ApiTags } from "@nestjs/swagger"
import { ResourceType } from "../auth/decorators/resource-type.decorator"
import { OptionalAuthGuard } from "../auth/guards/optional-auth.guard"
import { ApplicationsService } from "./applications.service"
import { ApplicationCreateDto, ApplicationDto } from "./dto/application.dto"
import { mapTo } from "../shared/mapTo"
import { defaultValidationPipeOptions } from "../shared/default-validation-pipe-options"
import { ResourceAction } from "../auth/decorators/resource-action.decorator"
import { authzActions } from "../auth/services/authz.service"
import { AuthzGuard } from "../auth/guards/authz.guard"
import { ValidationsGroupsEnum } from "../shared/types/validations-groups-enum"
import { ThrottlerGuard } from "@nestjs/throttler"
import { applicationPreferenceApiExtraModels } from "./application-preference-api-extra-models"

@Controller("applications")
@ApiTags("applications")
@ApiBearerAuth()
@ResourceType("application")
@UseGuards(OptionalAuthGuard, AuthzGuard, ThrottlerGuard)
@UsePipes(
  new ValidationPipe({
    ...defaultValidationPipeOptions,
    groups: [ValidationsGroupsEnum.default, ValidationsGroupsEnum.applicants],
  })
)
@ApiExtraModels(...applicationPreferenceApiExtraModels)
export class ApplicationsSubmissionController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post(`submit`)
  @ApiOperation({ summary: "Submit application", operationId: "submit" })
  @ResourceAction(authzActions.submit)
  async submit(@Body() applicationCreateDto: ApplicationCreateDto): Promise<ApplicationDto> {
    const application = await this.applicationsService.submit(applicationCreateDto)
    return mapTo(ApplicationDto, application)
  }
}
