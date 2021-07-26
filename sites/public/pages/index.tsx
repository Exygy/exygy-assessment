import React, { useState } from "react"
import Head from "next/head"
import { Listing } from "@bloom-housing/backend-core/types"
import { Hero, SiteAlert } from "@bloom-housing/ui-components"
import Layout from "../layouts/application"
import axios from "axios"

interface IndexProps {
  listings: Listing[]
}

export default function Home(props: IndexProps) {
  const blankAlertInfo = {
    alertMessage: null,
    alertType: null,
  }

  const [alertInfo, setAlertInfo] = useState(blankAlertInfo)

  const heroTitle = (
    <>
      Welcome to the
      <br />
      Exygy Code Assessment
    </>
  )

  const alertClasses = "flex-grow mt-6 max-w-6xl w-full"
  return (
    <Layout>
      <Head>
        <title>{"Exygy Assessment"}</title>
      </Head>
      <div className="flex absolute w-full flex-col items-center">
        <SiteAlert type="alert" className={alertClasses} />
        <SiteAlert type="success" className={alertClasses} timeout={30000} />
      </div>
      <Hero
        title={heroTitle}
        buttonTitle={"VIEW DOCUMENTATION"}
        buttonLink="/docs"
        listings={props.listings}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  let listings = []
  try {
    // const response = await axios.get(process.env.listingServiceUrl)
    const response = await axios.get(process.env.listingServiceUrl)
    listings = response.data
  } catch (error) {
    console.error(error)
  }

  return { props: { listings }, revalidate: process.env.cacheRevalidate }
}
