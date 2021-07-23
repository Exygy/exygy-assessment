import * as React from "react"
import { LocalizedLink } from "../actions/LocalizedLink"
import { ApplicationStatus } from "../notifications/ApplicationStatus"
import "./ImageCard.scss"
import { Listing } from "@bloom-housing/backend-core/types"

export interface ImageCardProps {
  imageUrl: string
  subtitle?: string
  title: string
  href?: string
  listing?: Listing
  description?: string
}

const ImageCard = (props: ImageCardProps) => {
  let statusLabel

  if (props.listing) {
    statusLabel = (
      <aside className="image-card__status">
        <ApplicationStatus listing={props.listing} vivid />
      </aside>
    )
  }

  const image = (
    <div className="image-card__wrapper">
      <figure className="image-card">
        {props.imageUrl && (
          <img src={props.imageUrl} alt={props.description || "A picture of the building"} />
        )}

        <figcaption className="image-card__figcaption">
          <h2 className="image-card__title">{props.title}</h2>
          {props.subtitle && <p className="image-card__subtitle">{props.subtitle}</p>}
        </figcaption>
      </figure>
      {statusLabel}
    </div>
  )

  let card = image

  if (props.href) {
    card = (
      <LocalizedLink className="block" href={props.href}>
        {image}
      </LocalizedLink>
    )
  }

  return card
}

export { ImageCard as default, ImageCard }
