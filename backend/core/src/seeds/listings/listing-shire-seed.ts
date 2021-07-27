import { ListingDefaultSeed } from "./listing-default-seed"

export class ListingShireSeed extends ListingDefaultSeed {
  async seed() {
    const listing = await super.seed()
    return await this.listingRepository.save({
      ...listing,
      name: "Shire",
      buildingAddress: {},
      property: {
        ...listing.property,
        buildingAddress: {
          city: "Hobbiton",
          street: "1 Bag End St",
        },
      },
    })
  }
}
