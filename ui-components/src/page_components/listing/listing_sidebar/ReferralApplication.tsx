import * as React from "react"
import { t } from "../../../helpers/translator"
import { Icon, IconFillColors } from "../../../icons/Icon"

interface ReferralApplicationProps {
  description: string
  phoneNumber: string
  title: string
}

const ReferralApplication = (props: ReferralApplicationProps) => {
  const linkedPhoneNumber = `tel:${props.phoneNumber.replace(/[-()]/g, "")}`

  return (
    <section className="aside-block">
      <h2 className="text-caps-underline">{props.title}</h2>
      <p>
        <a href={linkedPhoneNumber}>
          <Icon symbol="phone" size="medium" fill={IconFillColors.primary} /> {t("t.call")}{" "}
          {props.phoneNumber}
        </a>
      </p>
      <p className="text-tiny mt-4 text-gray-800">{props.description}</p>
    </section>
  )
}

export { ReferralApplication as default, ReferralApplication }
