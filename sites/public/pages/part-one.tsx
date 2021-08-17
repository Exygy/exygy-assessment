import Head from "next/head"
import axios from "axios"
import { ListingsList, PageHeader } from "@bloom-housing/ui-components"
import { Listing } from "@bloom-housing/backend-core/types"
import Layout from "../layouts/application"

export interface PartOneProps {
  listings: Listing[]
}

export default function PartOne(props: PartOneProps) {
  const pageTitle = "Exygy Assessment - Part One"

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageHeader title="Part One" />
      <div className={"flex flex-col"}>
        <div>
          <ListingsList listings={props.listings} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let listings = []

  try {
    const response = await axios.get(process.env.listingServiceUrl)
    listings = response.data
  } catch (error) {
    console.error(error)
  }

  return { props: { listings }, revalidate: process.env.cacheRevalidate }
}
