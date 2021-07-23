import * as React from "react"
import { ImageCard } from "../../blocks/ImageCard"
import { Listing } from "@bloom-housing/backend-core/types"
import "./ListingsList.scss"

export interface ListingsProps {
  listings: Listing[]
}

const ListingsList = (props: ListingsProps) => {
  const listings = props.listings

  const listingPhotos = {
    Gondor: "/images/gondor.jpeg",
    Rivendell: "/images/rivendell.jpeg",
    Shire: "/images/shire.jpeg",
  }

  const listItems = listings.map((listing: Listing) => {
    const imageUrl = listingPhotos[listing.name]
    const { street, city } = listing.buildingAddress || {}
    const subtitle = `${street}, ${city}`

    return (
      <article key={listing.id} className="listings-row">
        <div className="listings-row_figure">
          <ImageCard
            title={listing.name}
            subtitle={subtitle}
            imageUrl={imageUrl}
            listing={listing}
          />
        </div>
        <div className={"p-3"}>
          Your unit summaries table for the {listing.name} listing goes here
        </div>
      </article>
    )
  })

  return <>{listItems}</>
}

export { ListingsList as default, ListingsList }
