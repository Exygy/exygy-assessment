/*
5.4 Confirmation
Application confirmation with lottery number (confirmation number)
*/
import Link from "next/link"
import { useRouter } from "next/router"
import {
  AppearanceStyleType,
  Button,
  FormCard,
  imageUrlFromListing,
  AuthContext,
  t,
} from "@bloom-housing/ui-components"
import FormsLayout from "../../../layouts/forms"
import { AppSubmissionContext } from "../../../lib/AppSubmissionContext"
import React, { useContext } from "react"

const ApplicationConfirmation = () => {
  const { application, listing } = useContext(AppSubmissionContext)
  const { initialStateLoaded, profile } = useContext(AuthContext)
  const router = useRouter()

  const imageUrl = imageUrlFromListing(listing, parseInt(process.env.listingPhotoSize))

  return (
    <FormsLayout>
      <FormCard>
        <div className="form-card__lead">
          <h2 className="form-card__title is-borderless">
            {t("application.review.confirmation.title")}
            {listing?.name}
          </h2>
        </div>

        {imageUrl && <img src={imageUrl} alt={listing?.name} />}

        <div className="form-card__group border-b text-center">
          <h3 className="form-card__paragraph-title">
            {t("application.review.confirmation.lotteryNumber")}
          </h3>

          <p id="confirmationId" className="font-serif text-3xl my-1">
            {application.confirmationId}
          </p>
          <p className="field-note">{t("application.review.confirmation.pleaseWriteNumber")}</p>
        </div>

        <div className="form-card__group border-b">
          <h3 className="form-card__paragraph-title">
            {t("application.review.confirmation.whatExpectTitle")}
          </h3>

          <p className="field-note mt-2">
            {t("application.review.confirmation.whatExpectSecondparagraph")}
          </p>
        </div>

        <div className="form-card__group border-b">
          <h3 className="form-card__paragraph-title">
            {t("application.review.confirmation.doNotSubmitTitle")}
          </h3>

          <p className="field-note mt-1">{t("application.review.confirmation.needToUpdate")}</p>

          {listing && (
            <p className="field-note mt-2">
              {listing.leasingAgentName}
              <br />
              {listing.leasingAgentPhone}
              <br />
              {listing.leasingAgentEmail}
            </p>
          )}
        </div>

        {initialStateLoaded && !profile && (
          <div className="form-card__group">
            <h3 className="form-card__paragraph-title">
              {t("application.review.confirmation.createAccountTitle")}
            </h3>

            <p className="field-note mt-1">
              {t("application.review.confirmation.createAccountParagraph")}
            </p>
          </div>
        )}

        <div className="form-card__pager">
          {initialStateLoaded && !profile && (
            <div className="form-card__pager-row primary">
              <Button
                styleType={AppearanceStyleType.primary}
                onClick={() => {
                  void router.push("/create-account")
                }}
              >
                {t("account.createAccount")}
              </Button>
            </div>
          )}

          <div className="form-card__pager-row py-6">
            <a className="lined text-tiny" href="/">
              {t("application.review.confirmation.imdone")}
            </a>
          </div>

          <div className="form-card__pager-row py-6">
            <Link href="/listings">
              <a className="lined text-tiny">{t("application.review.confirmation.browseMore")}</a>
            </Link>
          </div>

          <div className="form-card__pager-row py-6 border-t">
            <Link href="/applications/view">
              <a className="lined text-tiny">{t("application.review.confirmation.print")}</a>
            </Link>
          </div>
        </div>
      </FormCard>
    </FormsLayout>
  )
}

export default ApplicationConfirmation
