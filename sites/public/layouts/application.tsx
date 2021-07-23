import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"
import { SiteHeader, SiteFooter, FooterSection, ExygyFooter, t } from "@bloom-housing/ui-components"

const Layout = (props) => {
  const router = useRouter()

  return (
    <div className="site-wrapper">
      <div className="site-content">
        <Head>
          <title>{t("nav.siteTitle")}</title>
        </Head>
        <SiteHeader skip={t("nav.skip")} logoSrc="/images/logo.png" title={"Exygy Assessment"}>
          <Link href="/part-one">
            <a className="navbar-item">Assessment Part 1</a>
          </Link>
          <Link href="/part-two">
            <a className="navbar-item">Assessment Part 2</a>
          </Link>
        </SiteHeader>
        <main id="main-content">{props.children}</main>
      </div>

      <SiteFooter>
        <FooterSection className="bg-black" small>
          <ExygyFooter />
        </FooterSection>
      </SiteFooter>
    </div>
  )
}

export default Layout
