import Head from "next/head"
import { PageHeader } from "@bloom-housing/ui-components"
import Layout from "../layouts/application"

export default function PartTwo() {
  const pageTitle = "Exygy Assessment - Part Two"

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageHeader title={"Rent Housing"} />
      <div>
        <div className="notice-block">
          <h3 className="m-auto text-gray-800">Part Two</h3>
        </div>
      </div>
    </Layout>
  )
}
