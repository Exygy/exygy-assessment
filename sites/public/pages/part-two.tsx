import React, { useContext } from "react"
import axios from "axios"
import Head from "next/head"
import { AuthContext, PageHeader, Form, FormCard, Button } from "@bloom-housing/ui-components"
import { Listing } from "@bloom-housing/backend-core/types"
import { useForm } from "react-hook-form"
import Layout from "../layouts/application"

export interface PartTwoProps {
  listings: Listing[]
}

export default function PartTwo(props: PartTwoProps) {
  const { listingsService } = useContext(AuthContext)
  const { handleSubmit } = useForm()

  const onSubmit = async () => {
    // await listingsService.update({
    //   // Updated data
    // })
  }

  return (
    <Layout>
      <Head>
        <title>Exygy Assessment - Part Two</title>
      </Head>
      <PageHeader title={"Part Two"} />
      <section className="bg-gray-300">
        <div className="md:mb-20 md:mt-12 mx-auto max-w-lg print:my-0 print:max-w-full">
          <FormCard>
            <div className="form-card__group">
              <Form id="sign-in" onSubmit={handleSubmit(onSubmit)}>
                Your form goes here
                <div className="text-center mt-6">
                  <Button>Submit</Button>
                </div>
              </Form>
            </div>
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
