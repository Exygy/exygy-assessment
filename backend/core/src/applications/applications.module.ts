import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Application } from "./entities/application.entity"
import { ApplicationsService } from "./applications.service"
import { ApplicationsController } from "./applications.controller"
import { AuthModule } from "../auth/auth.module"
import { CsvEncoder } from "../csv/csv-encoder.service"
import { CsvBuilder } from "../csv/csv-builder.service"
import { SharedModule } from "../shared/shared.module"
import { ListingsModule } from "../listings/listings.module"
import { Address } from "../shared/entities/address.entity"
import { Applicant } from "./entities/applicant.entity"
import { ApplicationsSubmissionController } from "./applications-submission.controller"
import { ApplicationCsvExporter } from "../csv/application-csv-exporter"
import { ApplicationFlaggedSetsModule } from "../application-flagged-sets/application-flagged-sets.module"
import { EmailModule } from "../shared/email/email.module"
import { TranslationsModule } from "../translations/translations.module"

@Module({
  imports: [
    TypeOrmModule.forFeature([Application, Applicant, Address]),
    AuthModule,
    SharedModule,
    ListingsModule,
    ApplicationFlaggedSetsModule,
    TranslationsModule,
    EmailModule,
  ],
  providers: [ApplicationsService, CsvEncoder, CsvBuilder, ApplicationCsvExporter],
  exports: [ApplicationsService],
  controllers: [ApplicationsController, ApplicationsSubmissionController],
})
export class ApplicationsModule {}
