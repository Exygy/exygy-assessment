import Head from "next/head"
import axios from "axios"
import moment from "moment"
import {
  ListingsGroup,
  ListingsList,
  PageHeader,
  openDateState,
  t,
} from "@bloom-housing/ui-components"
import { Listing } from "@bloom-housing/backend-core/types"
import Layout from "../layouts/application"
import { MetaTags } from "../src/MetaTags"

export interface ListingsProps {
  openListings: Listing[]
  closedListings: Listing[]
}

const openListings = (listings) => {
  return listings.length > 0 ? (
    <ListingsList listings={listings} />
  ) : (
    <div className="notice-block">
      <h3 className="m-auto text-gray-800">{t("listings.noOpenListings")}</h3>
    </div>
  )
}

const closedListings = (listings) => {
  return (
    listings.length > 0 && (
      <ListingsGroup
        listings={listings}
        header={t("listings.closedListings")}
        hideButtonText={t("listings.hideClosedListings")}
        showButtonText={t("listings.showClosedListings")}
      />
    )
  )
}

export default function PartTwo(props: ListingsProps) {
  const pageTitle = `${t("pageTitle.rent")} - ${t("nav.siteTitle")}`
  const metaDescription = t("pageDescription.welcome", { regionName: t("region.name") })
  const metaImage = "" // TODO: replace with hero image

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <MetaTags title={t("nav.siteTitle")} image={metaImage} description={metaDescription} />
      <PageHeader title={"Rent Housing"} />
      <div>
        <div className="notice-block">
          <h3 className="m-auto text-gray-800">Part Two</h3>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let openListings = []
  let closedListings = []

  try {
    const response = await axios.get(
      process.env.listingServiceUrl + "?filter[$comparison]=<>&filter[status]=pending"
    )
    const nowTime = moment()
    openListings = response.data.filter((listing: Listing) => {
      return (
        openDateState(listing) ||
        nowTime <= moment(listing.applicationDueDate) ||
        listing.applicationDueDate == null
      )
    })
    closedListings = response.data.filter((listing: Listing) => {
      return nowTime > moment(listing.applicationDueDate)
    })
  } catch (error) {
    console.error(error)
  }

  return { props: { openListings, closedListings }, revalidate: process.env.cacheRevalidate }
}
