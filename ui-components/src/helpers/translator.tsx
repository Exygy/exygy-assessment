import Polyglot from "node-polyglot"

interface TranslatorConfig {
  polyglot?: any
}

const translatorConfig: TranslatorConfig = {}
;(global as any).Translator = translatorConfig

export const addTranslation = (translationPhrases: any, resetPolyglot = false) => {
  if (!translatorConfig.polyglot || resetPolyglot) {
    // Set up the initial Polyglot instance and phrases
    translatorConfig.polyglot = new Polyglot({
      phrases: translationPhrases,
    })
  } else {
    // Extend the Polyglot instance with new phrases
    translatorConfig.polyglot.extend(translationPhrases)
  }
}

const t = (phrase: string, options?: any): string => {
  if (translatorConfig.polyglot) {
    return translatorConfig.polyglot.t(phrase, options)
  }
  return "{{ Missing Translation Phrases }}"
}

const locale = () => {
  if (!translatorConfig.polyglot) {
    return translatorConfig.polyglot()
  } else {
    return "en"
  }
}

export { t as default, t, locale }
