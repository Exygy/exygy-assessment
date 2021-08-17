import Layout from "../layouts/application"
import Head from "next/head"
import { Hero } from "@bloom-housing/ui-components"

const ErrorPage = () => {
  const pageTitle = "Page Not Found"

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Hero title={pageTitle} buttonTitle={"View Documentation"} buttonLink="/docs">
        Uh oh, we can’t seem to find the page you’re looking for. Try going back to the previous
        page or click below to view documentation.
      </Hero>
    </Layout>
  )
}

export { ErrorPage as default, ErrorPage }
