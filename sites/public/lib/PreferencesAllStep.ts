import StepDefinition from "./StepDefinition"

export default class PreferencesAllStep extends StepDefinition {
  skipStep() {
    return !this.conductor.listing.preferences.length
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  save(formData: Record<string, any>) {
    this.application.preferences = formData
    this.conductor.sync()
  }
}
