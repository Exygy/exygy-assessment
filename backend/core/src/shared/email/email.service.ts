import { Injectable, Logger, Scope } from "@nestjs/common"
import { SendGridService } from "@anchan828/nest-sendgrid"
import { ResponseError } from "@sendgrid/helpers/classes"
import Handlebars from "handlebars"
import path from "path"
import { User } from "../../auth/entities/user.entity"
import { Listing } from "../../listings/entities/listing.entity"
import Polyglot from "node-polyglot"
import fs from "fs"
import { ConfigService } from "@nestjs/config"
import { Application } from "../../applications/entities/application.entity"
import { TranslationsService } from "../../translations/translations.service"
import { CountyCode } from "../types/county-code"
import { Language } from "../types/language-enum"
import { CountyCodeResolverService } from "../services/county-code-resolver.service"

@Injectable({ scope: Scope.REQUEST })
export class EmailService {
  polyglot: Polyglot

  constructor(
    private readonly sendGrid: SendGridService,
    private readonly configService: ConfigService,
    private readonly translationService: TranslationsService,
    private readonly countyCodeResolverService: CountyCodeResolverService
  ) {
    this.polyglot = new Polyglot({
      phrases: {},
    })
    const polyglot = this.polyglot
    Handlebars.registerHelper("t", function (
      phrase: string,
      options?: number | Polyglot.InterpolationOptions
    ) {
      return polyglot.t(phrase, options)
    })
    const parts = this.partials()
    Handlebars.registerPartial(parts)
  }

  public async welcome(user: User, appUrl: string) {
    const language = user.language || Language.en
    // NOTE What to do when user has no countyCode e.g. an admin?
    void (await this.loadTranslations(this.countyCodeResolverService.getCountyCode(), language))
    const confirmationUrl = `${appUrl}?token=${user.confirmationToken}`
    if (this.configService.get<string>("NODE_ENV") === "production") {
      Logger.log(
        `Preparing to send a welcome email to ${user.email} from ${this.configService.get<string>(
          "EMAIL_FROM_ADDRESS"
        )}...`
      )
    }
    await this.send(
      user.email,
      "Welcome to Bloom",
      this.template("register-email")({
        user: user,
        confirmationUrl: confirmationUrl,
        appOptions: { appUrl: appUrl },
      })
    )
  }

  public async confirmation(listing: Listing, application: Application, appUrl: string) {
    void (await this.loadTranslations(listing.countyCode, application.language || Language.en))
    let whatToExpectText
    const listingUrl = `${appUrl}/listing/${listing.id}`
    const compiledTemplate = this.template("confirmation")

    if (this.configService.get<string>("NODE_ENV") == "production") {
      Logger.log(
        `Preparing to send a confirmation email to ${
          application.applicant.emailAddress
        } from ${this.configService.get<string>("EMAIL_FROM_ADDRESS")}...`
      )
    }

    if (listing.applicationDueDate) {
      if (!listing.waitlistMaxSize) {
        whatToExpectText = this.polyglot.t("confirmation.whatToExpect.lottery", {
          lotteryDate: listing.applicationDueDate,
        })
      } else {
        whatToExpectText = this.polyglot.t("confirmation.whatToExpect.noLottery", {
          lotteryDate: listing.applicationDueDate,
        })
      }
    } else {
      whatToExpectText = this.polyglot.t("confirmation.whatToExpect.FCFS")
    }
    const user = {
      firstName: application.applicant.firstName,
      middleName: application.applicant.middleName,
      lastName: application.applicant.lastName,
    }
    await this.send(
      application.applicant.emailAddress,
      this.polyglot.t("confirmation.subject"),
      compiledTemplate({
        listing: listing,
        listingUrl: listingUrl,
        application: application,
        whatToExpectText: whatToExpectText,
        user: user,
      })
    )
  }

  public async forgotPassword(user: User, appUrl: string) {
    void (await this.loadTranslations(
      this.countyCodeResolverService.getCountyCode(),
      user.language
    ))
    const compiledTemplate = this.template("forgot-password")
    const resetUrl = `${appUrl}/reset-password?token=${user.resetToken}`

    if (this.configService.get<string>("NODE_ENV") == "production") {
      Logger.log(
        `Preparing to send a forget password email to ${user.email} from ${this.configService.get<
          string
        >("EMAIL_FROM_ADDRESS")}...`
      )
    }

    await this.send(
      user.email,
      this.polyglot.t("forgotPassword.subject"),
      compiledTemplate({
        resetUrl: resetUrl,
        resetOptions: { appUrl: appUrl },
        user: user,
      })
    )
  }

  private async loadTranslations(countyCode: CountyCode, language: Language) {
    const translation = await this.translationService.getTranslationByLanguageAndCountyCodeOrDefaultEn(
      language,
      countyCode
    )
    this.polyglot.replace(translation.translations)
  }

  private template(view: string) {
    return Handlebars.compile(
      fs.readFileSync(
        path.join(path.resolve(__dirname, "..", "..", "views"), `/${view}.hbs`),
        "utf8"
      )
    )
  }

  private partial(view: string) {
    return fs.readFileSync(
      path.join(path.resolve(__dirname, "..", "..", "views"), `/${view}`),
      "utf8"
    )
  }

  private partials() {
    const partials = {}
    const dirName = path.resolve(__dirname, "..", "..", "views/partials")

    fs.readdirSync(dirName).forEach((filename) => {
      partials[filename.slice(0, -4)] = this.partial("partials/" + filename)
    })

    return partials
  }

  private async send(to: string, subject: string, body: string, retry?: number) {
    await this.sendGrid.send(
      {
        to: to,
        from: this.configService.get<string>("EMAIL_FROM_ADDRESS"),
        subject: subject,
        html: body,
      },
      false,
      (error) => {
        if (error instanceof ResponseError) {
          const { response } = error
          const { body } = response
          console.error(`Error sending email to: ${to}! Error body: ${body}`)
          if (!retry) {
            retry = 3
          }
          // Retries, if sending failed
          void this.send(to, subject, body, retry - 1)
        }
      }
    )
  }
}
