import React, { createElement, FunctionComponent, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { ConfigContext, NavigationContext } from "../config"
import { Button } from "../actions/Button"
import { Modal } from "../overlays/Modal"
import { setSiteAlertMessage } from "../notifications/SiteAlert"
import { AlertTypes } from "../notifications/alertTypes"
import { t } from "../helpers/translator"
import { AppearanceStyleType } from "../global/AppearanceTypes"

const PROMPT_TIMEOUT = 60000
const events = ["mousemove", "keypress", "scroll"]

function useIdleTimeout(timeoutMs: number, onTimeout: () => void) {
  useEffect(() => {
    let timer: number
    const restartTimer = () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = (setTimeout(onTimeout, timeoutMs) as unknown) as number
    }

    // Listen for any activity events & reset the timer when they are found
    if (typeof document !== "undefined") {
      events.forEach((event) => document.addEventListener(event, restartTimer, false))
    }

    // Clean up our listeners & clear the timeout on unmounting/updating the effect
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
      events.forEach((event) => document.removeEventListener(event, restartTimer, false))
    }
  }, [timeoutMs, onTimeout])
}

type IdleTimeoutProps = {
  promptTitle: string
  promptText: string
  promptAction: string
  redirectPath: string
  alertMessage: string
  alertType?: AlertTypes
  onTimeout: () => unknown
}

export const IdleTimeout: FunctionComponent<IdleTimeoutProps> = ({
  promptTitle,
  promptAction,
  promptText,
  redirectPath,
  alertMessage,
  alertType = "alert",
  onTimeout,
}) => {
  const { idleTimeout } = useContext(ConfigContext)
  const [promptTimeout, setPromptTimeout] = useState<number | undefined>()
  const { router } = useContext(NavigationContext)

  useIdleTimeout(idleTimeout, () => {
    // Clear any existing prompt timeouts
    if (promptTimeout) {
      clearTimeout(promptTimeout)
    }

    // Give the user 1 minute to respond to the prompt before the onTimeout action
    setPromptTimeout(
      (setTimeout(() => {
        const timeoutAction = async () => {
          setPromptTimeout(undefined)
          await onTimeout()
          setSiteAlertMessage(alertMessage, alertType)
          void router.push(redirectPath)
        }
        void timeoutAction()
      }, PROMPT_TIMEOUT) as unknown) as number
    )
  })

  const modalActions = [
    <Button
      styleType={AppearanceStyleType.primary}
      onClick={() => {
        clearTimeout(promptTimeout)
        setPromptTimeout(undefined)
      }}
    >
      {promptAction}
    </Button>,
  ]

  return (
    <Modal
      open={Boolean(promptTimeout)}
      title={promptTitle}
      ariaDescription={promptText}
      actions={modalActions}
      hideCloseIcon
    >
      {promptText}
    </Modal>
  )
}

export const LoggedInUserIdleTimeout = ({ onTimeout }: { onTimeout?: () => unknown }) => {
  const { profile, signOut } = useContext(AuthContext)

  const timeoutFxn = async () => {
    onTimeout && (await onTimeout())
    signOut && signOut()
  }

  // Only render the IdleTimeout component if the user is logged in
  return profile && signOut
    ? createElement(IdleTimeout, {
        promptTitle: t("t.areYouStillWorking"),
        promptText: t("authentication.timeout.text"),
        promptAction: t("authentication.timeout.action"),
        redirectPath: `/sign-in`,
        alertMessage: t("authentication.timeout.signOutMessage"),
        alertType: "notice",
        onTimeout: timeoutFxn,
      })
    : null
}
