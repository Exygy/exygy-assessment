import "@bloom-housing/ui-components/src/global/index.scss"
import { useEffect, useMemo } from "react"
import type { AppProps } from "next/app"
import {
  addTranslation,
  GenericRouter,
  NavigationContext,
  ConfigProvider,
} from "@bloom-housing/ui-components"
import { headScript, bodyTopTag, pageChangeHandler } from "../src/customScripts"

import { translations, overrideTranslations } from "../src/translations"
import LinkComponent from "../src/LinkComponent"

function BloomApp({ Component, router, pageProps }: AppProps) {
  const { locale } = router

  useMemo(() => {
    addTranslation(translations.general, true)
    if (locale && locale !== "en" && translations[locale]) {
      addTranslation(translations[locale])
    }

    if (overrideTranslations[locale]) {
      addTranslation(overrideTranslations[locale])
    }
  }, [locale])

  useEffect(() => {
    if (!document.body.dataset.customScriptsLoaded) {
      router.events.on("routeChangeComplete", pageChangeHandler)

      const headScriptTag = document.createElement("script")
      headScriptTag.textContent = headScript()
      if (headScriptTag.textContent !== "") {
        document.head.append(headScriptTag)
      }

      const bodyTopTagTmpl = document.createElement("template")
      bodyTopTagTmpl.innerHTML = bodyTopTag()
      if (bodyTopTagTmpl.innerHTML !== "") {
        document.body.prepend(bodyTopTagTmpl.content.cloneNode(true))
      }

      document.body.dataset.customScriptsLoaded = "true"
    }
  })

  return (
    <NavigationContext.Provider
      value={{
        LinkComponent,
        router: router as GenericRouter,
      }}
    >
      <ConfigProvider apiUrl={process.env.backendApiBase}>
        <Component {...pageProps} />∂{" "}
      </ConfigProvider>
    </NavigationContext.Provider>
  )
}

export default BloomApp
