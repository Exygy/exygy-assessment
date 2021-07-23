import * as React from "react"
import { ImageCard } from "../../blocks/ImageCard"
import { Listing } from "@bloom-housing/backend-core/types"
import { LinkButton } from "../../actions/LinkButton"
import { groupNonReservedAndReservedSummaries } from "../../helpers/tableSummaries"
import { GroupedTable, GroupedTableGroup } from "../../tables/GroupedTable"
import { t } from "../../helpers/translator"
import "./ListingsList.scss"

export interface ListingsProps {
  listings: Listing[]
}

const ListingsList = (props: ListingsProps) => {
  const listings = props.listings

  const listingPhotos = ["/images/gondor.jpeg", "/images/rivendell.jpeg", "/images/shire.jpeg"]
  const listItems = listings.map((listing: Listing, index) => {
    const imageUrl = listingPhotos[index]
    const unitSummariesHeaders = {
      unitType: t("t.unitType"),
      minimumIncome: t("t.minimumIncome"),
      rent: t("t.rent"),
    }

    let unitSummaries = [] as GroupedTableGroup[]
    if (listing.unitsSummarized !== undefined) {
      unitSummaries = groupNonReservedAndReservedSummaries(
        listing.unitsSummarized.byNonReservedUnitType,
        listing.unitsSummarized.byReservedType
      )
    }

    // address as subtitle
    const { street, city, state, zipCode } = listing.buildingAddress || {}
    const subtitle = `${street}, ${city} ${state}, ${zipCode}`

    return (
      <article key={listing.id} className="listings-row">
        <div className="listings-row_figure">
          <ImageCard
            title={listing.name}
            subtitle={subtitle}
            imageUrl={imageUrl}
            href={`/listing/${listing.id}/${listing.urlSlug}`}
            listing={listing}
          />
        </div>
        <div className="listings-row_content">
          {listing.showWaitlist && (
            <h4 className="listings-row_title">{t("listings.waitlist.open")}</h4>
          )}
          <div className="listings-row_table">
            {unitSummaries && (
              <GroupedTable
                headers={unitSummariesHeaders}
                data={unitSummaries}
                responsiveCollapse={true}
                cellClassName="px-5 py-3"
              />
            )}
          </div>
          <LinkButton href={`/listing/${listing.id}/${listing.urlSlug}`}>
            {t("t.seeDetails")}
          </LinkButton>
        </div>
      </article>
    )
  })

  return <>{listItems}</>
}

export { ListingsList as default, ListingsList }
