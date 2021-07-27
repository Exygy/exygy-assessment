import React from "react"
import axios from "axios"
import Head from "next/head"
import { PageHeader, FormCard } from "@bloom-housing/ui-components"
import { Listing } from "@bloom-housing/backend-core/types"
import Layout from "../layouts/application"

export interface PartTwoProps {
  listings: Listing[]
}

export default function PartTwo(props: PartTwoProps) {
  return (
    <Layout>
      <Head>
        <title>Exygy Assessment - Part Two</title>
      </Head>
      <PageHeader title={"Part Two"} />
      <section className="bg-gray-300">
        <div className="md:mb-20 md:mt-12 mx-auto max-w-lg print:my-0 print:max-w-full">
          <FormCard>
            <div className="form-card__group">Your form goes here</div>
          </FormCard>
        </div>
      </section>
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
