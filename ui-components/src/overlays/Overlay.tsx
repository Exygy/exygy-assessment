import React, { useState, useEffect, createRef } from "react"
import "./Overlay.scss"
import useKeyPress from "../helpers/useKeyPress"
import { useOutsideClick } from "../helpers/useOutsideClick"
import { createPortal } from "react-dom"
import FocusLock from "react-focus-lock"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { CSSTransition } from "react-transition-group"

export type OverlayProps = {
  open?: boolean
  ariaLabel?: string
  ariaDescription?: string
  className?: string
  backdrop?: boolean
  onClose?: () => void
  children: React.ReactNode
}

const OverlayInner = (props: OverlayProps) => {
  // close overlay on click outside overlay content
  const overlayInnerRef = createRef<HTMLDivElement>()
  useOutsideClick({
    ref: overlayInnerRef,
    callback: () => {
      if (props.onClose) props.onClose()
    },
  })

  useKeyPress("Escape", () => {
    if (props.onClose) props.onClose()
  })

  const classNames = ["fixed-overlay"]
  if (typeof props.backdrop === "undefined" || props.backdrop) classNames.push("is-backdrop")
  if (props.className) classNames.push(props.className)

  return (
    <div
      className={classNames.join(" ")}
      role="dialog"
      aria-labelledby={props.ariaLabel}
      aria-describedby={props.ariaDescription}
    >
      <div className="fixed-overlay__inner" ref={overlayInnerRef}>
        <FocusLock>{props.children}</FocusLock>
      </div>
    </div>
  )
}

export const Overlay = (props: OverlayProps) => {
  const documentAvailable = typeof document !== "undefined"
  const overlayRoot = useState<Element | null>(
    documentAvailable ? document.querySelector("#__next") : null
  )[0]
  const elForPortal = useState<Element | null>(
    documentAvailable ? document.createElement("div") : null
  )[0]

  // append overlay to the root of app
  useEffect(() => {
    if (!(overlayRoot && elForPortal)) return

    overlayRoot.appendChild(elForPortal)

    return () => {
      overlayRoot.removeChild(elForPortal)
    }
  }, [elForPortal, overlayRoot])

  // disable body scrolling when the overlay is open
  useEffect(() => {
    if (!(overlayRoot && elForPortal)) return

    props.open ? disableBodyScroll(elForPortal) : enableBodyScroll(elForPortal)

    return () => {
      if (!props.open) enableBodyScroll(elForPortal)
    }
  }, [elForPortal, overlayRoot, props.open])

  return (
    elForPortal &&
    createPortal(
      <CSSTransition
        in={props.open}
        timeout={250}
        classNames="overlay-effect"
        mountOnEnter
        unmountOnExit
      >
        <OverlayInner {...props}>{props.children}</OverlayInner>
      </CSSTransition>,
      elForPortal
    )
  )
}

export default Overlay
