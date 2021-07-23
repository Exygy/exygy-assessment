/*
4.3 General Pool
If all preferences are opted out the applicant is shown a screen confirming their placement in the General Pool
*/
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import {
  AppearanceStyleType,
  Button,
  FormCard,
  ProgressNav,
  t,
  Form,
} from "@bloom-housing/ui-components"
import FormsLayout from "../../../layouts/forms"
import FormBackLink from "../../../src/forms/applications/FormBackLink"
import { useFormConductor } from "../../../lib/hooks"

const ApplicationPreferencesGeneral = () => {
  const [hideReviewButton, setHideReviewButton] = useState(false)
  const { conductor, application, listing } = useFormConductor("generalPool")
  const currentPageSection = 4

  /* Form Handler */
  const { handleSubmit } = useForm()
  const onSubmit = () => {
    if (!conductor.canJumpForwardToReview()) setHideReviewButton(true)
    conductor.completeSection(4)
    conductor.sync()
    conductor.routeToNextOrReturnUrl()
  }

  return (
    <FormsLayout>
      <FormCard header={listing?.name}>
        <ProgressNav
          currentPageSection={currentPageSection}
          completedSections={application.completedSections}
          labels={conductor.config.sections.map((label) => t(`t.${label}`))}
        />
      </FormCard>

      <FormCard>
        <FormBackLink
          url={conductor.determinePreviousUrl()}
          onClick={() => conductor.setNavigatedBack(true)}
        />

        <div className="form-card__lead">
          <h2 className="form-card__title is-borderless">
            {t("application.preferences.general.title")}
          </h2>

          <p className="field-note mt-5">{t("application.preferences.general.preamble")}</p>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-card__pager">
            <div className="form-card__pager-row primary">
              <Button
                styleType={AppearanceStyleType.primary}
                onClick={() => {
                  conductor.returnToReview = false
                  conductor.setNavigatedBack(false)
                }}
              >
                {t("t.next")}
              </Button>
            </div>

            {!hideReviewButton && conductor.canJumpForwardToReview() && (
              <div className="form-card__pager-row">
                <Button
                  unstyled={true}
                  className="mb-4"
                  onClick={() => {
                    conductor.returnToReview = true
                  }}
                >
                  {t("application.form.general.saveAndReturn")}
                </Button>
              </div>
            )}
          </div>
        </Form>
      </FormCard>
    </FormsLayout>
  )
}

export default ApplicationPreferencesGeneral
