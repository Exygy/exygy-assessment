import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { LocalStrategy } from "./passport-strategies/local.strategy"
import { JwtStrategy } from "./passport-strategies/jwt.strategy"
import { PassportModule } from "@nestjs/passport"
import { TypeOrmModule } from "@nestjs/typeorm"
import { RevokedToken } from "./entities/revoked-token.entity"
import { SharedModule } from "../shared/shared.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { AuthService } from "./services/auth.service"
import { AuthzService } from "./services/authz.service"
import { AuthController } from "./controllers/auth.controller"
import { User } from "./entities/user.entity"
import { UserService } from "./services/user.service"
import { UserController } from "./controllers/user.controller"
import { EmailModule } from "../shared/email/email.module"
import { PasswordService } from "./services/password.service"

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>("APP_SECRET"),
        signOptions: {
          expiresIn: "10m",
        },
      }),
    }),
    TypeOrmModule.forFeature([RevokedToken, User]),
    SharedModule,
    EmailModule,
  ],
  providers: [LocalStrategy, JwtStrategy, AuthService, AuthzService, UserService, PasswordService],
  exports: [AuthzService, AuthService, UserService],
  controllers: [AuthController, UserController],
})
export class AuthModule {}
