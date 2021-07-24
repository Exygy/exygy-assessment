import Head from "next/head"
import { PageHeader, t } from "@bloom-housing/ui-components"
import Layout from "../layouts/application"

export default function Docs() {
  const pageTitle = "Exygy Assessment - Docs"

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageHeader title="Documentation" />
      <div className={"flex flex-col"}>Docs here</div>
    </Layout>
  )
}
