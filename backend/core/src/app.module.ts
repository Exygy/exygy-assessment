import { ClassSerializerInterceptor, DynamicModule, INestApplication, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
// Use require because of the CommonJS/AMD style export.
// See https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require

import { ListingsModule } from "./listings/listings.module"
import { EntityNotFoundExceptionFilter } from "./filters/entity-not-found-exception.filter"
import { logger } from "./middleware/logger.middleware"
import { UnitsModule } from "./units/units.module"
import { PropertiesModule } from "./property/properties.module"
import * as bodyParser from "body-parser"
import { ThrottlerModule } from "@nestjs/throttler"
import { ThrottlerStorageRedisService } from "nestjs-throttler-storage-redis"
import Redis from "ioredis"
import { SharedModule } from "./shared/shared.module"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { TranslationsModule } from "./translations/translations.module"
import { Reflector } from "@nestjs/core"
import { AssetsModule } from "./assets/assets.module"
import { UnitTypesModule } from "./unit-types/unit-types.module"

export function applicationSetup(app: INestApplication) {
  app.enableCors()
  app.use(logger)
  app.useGlobalFilters(new EntityNotFoundExceptionFilter())
  app.use(bodyParser.json({ limit: "50mb" }))
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), { excludeExtraneousValues: true })
  )
  return app
}

@Module({})
export class AppModule {
  static register(dbOptions): DynamicModule {
    /**
     * DEV NOTE:
     * This configuration is required due to issues with
     * self signed certificates in Redis 6.
     *
     * { rejectUnauthorized: false } option is intentional and required
     *
     * Read more:
     * https://help.heroku.com/HC0F8CUS/redis-connection-issues
     * https://devcenter.heroku.com/articles/heroku-redis#ioredis-module
     */
    const redis =
      "0" === process.env.REDIS_USE_TLS
        ? new Redis(process.env.REDIS_URL)
        : new Redis(process.env.REDIS_TLS_URL, {
            tls: {
              rejectUnauthorized: false,
            },
          })

    return {
      module: AppModule,
      imports: [
        AssetsModule,
        ListingsModule,
        PropertiesModule,
        SharedModule,
        TranslationsModule,
        TypeOrmModule.forRoot({
          ...dbOptions,
          autoLoadEntities: true,
        }),
        ThrottlerModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
            ttl: config.get("THROTTLE_TTL"),
            limit: config.get("THROTTLE_LIMIT"),
            storage: new ThrottlerStorageRedisService(redis),
          }),
        }),
        UnitsModule,
        UnitTypesModule,
      ],
    }
  }
}
