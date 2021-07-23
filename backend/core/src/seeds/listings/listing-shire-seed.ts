import { ListingDefaultSeed } from "./listing-default-seed"

export class ListingShireSeed extends ListingDefaultSeed {
  async seed() {
    const listing = await super.seed()
    return await this.listingRepository.save({
      ...listing,
      name: "The Shire",
    })
  }
}
