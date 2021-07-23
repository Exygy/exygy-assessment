import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common"
import { ApiBearerAuth, ApiOperation, ApiProperty, ApiTags } from "@nestjs/swagger"
import { Request as ExpressRequest } from "express"
import { Expose, Transform } from "class-transformer"
import { IsBoolean, IsOptional } from "class-validator"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"
import { ResourceType } from "../decorators/resource-type.decorator"
import { defaultValidationPipeOptions } from "../../shared/default-validation-pipe-options"
import { UserService } from "../services/user.service"
import { OptionalAuthGuard } from "../guards/optional-auth.guard"
import { AuthzGuard } from "../guards/authz.guard"
import { EmailDto, UserBasicDto, UserCreateDto, UserDto, UserUpdateDto } from "../dto/user.dto"
import { mapTo } from "../../shared/mapTo"
import { StatusDto } from "../../shared/dto/status.dto"
import { ConfirmDto } from "../dto/confirm.dto"
import { LoginResponseDto } from "../dto/login.dto"
import { ForgotPasswordDto, ForgotPasswordResponseDto } from "../dto/forgot-password.dto"
import { UpdatePasswordDto } from "../dto/update-password.dto"
import { AuthContext } from "../types/auth-context"
import { User } from "../entities/user.entity"

export class UserCreateQueryParams {
  @Expose()
  @ApiProperty({
    type: Boolean,
    example: true,
    required: false,
  })
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsBoolean({ groups: [ValidationsGroupsEnum.default] })
  @Transform((value: string | undefined) => value === "true", { toClassOnly: true })
  noWelcomeEmail?: boolean
}

@Controller("user")
@ApiBearerAuth()
@ApiTags("user")
@ResourceType("user")
@UsePipes(new ValidationPipe(defaultValidationPipeOptions))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(OptionalAuthGuard, AuthzGuard)
  profile(@Request() req): UserDto {
    return mapTo(UserDto, req.user)
  }

  @Post()
  @UseGuards(OptionalAuthGuard, AuthzGuard)
  @ApiOperation({ summary: "Create user", operationId: "create" })
  async create(
    @Body() dto: UserCreateDto,
    @Query() queryParams: UserCreateQueryParams
  ): Promise<UserBasicDto> {
    return mapTo(
      UserBasicDto,
      await this.userService.createUser(dto, queryParams.noWelcomeEmail !== true)
    )
  }

  @Post("resend-confirmation")
  @UseGuards(OptionalAuthGuard, AuthzGuard)
  @ApiOperation({ summary: "Resend confirmation", operationId: "resendConfirmation" })
  async confirmation(@Body() dto: EmailDto): Promise<StatusDto> {
    await this.userService.resendConfirmation(dto)
    return mapTo(StatusDto, { status: "ok" })
  }

  @Put("confirm")
  @ApiOperation({ summary: "Confirm email", operationId: "confirm" })
  async confirm(@Body() dto: ConfirmDto): Promise<LoginResponseDto> {
    const accessToken = await this.userService.confirm(dto)
    return mapTo(LoginResponseDto, { accessToken })
  }

  @Put("forgot-password")
  @ApiOperation({ summary: "Forgot Password", operationId: "forgot-password" })
  async forgotPassword(@Body() dto: ForgotPasswordDto): Promise<ForgotPasswordResponseDto> {
    await this.userService.forgotPassword(dto)
    return mapTo(ForgotPasswordResponseDto, { message: "Email was sent" })
  }

  @Put("update-password")
  @ApiOperation({ summary: "Update Password", operationId: "update-password" })
  async updatePassword(@Body() dto: UpdatePasswordDto): Promise<LoginResponseDto> {
    const accessToken = await this.userService.updatePassword(dto)
    return mapTo(LoginResponseDto, { accessToken })
  }

  @Put(":id")
  @UseGuards(OptionalAuthGuard, AuthzGuard)
  @ApiOperation({ summary: "Update user", operationId: "update" })
  async update(@Request() req: ExpressRequest, @Body() dto: UserUpdateDto): Promise<UserDto> {
    return mapTo(UserDto, await this.userService.update(dto, new AuthContext(req.user as User)))
  }
}
