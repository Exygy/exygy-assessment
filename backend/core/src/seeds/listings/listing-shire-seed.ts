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
          county: "Alameda",
          city: "Hobbiton",
          street: "1 Bag End St",
          zipCode: "12345",
          state: "CA",
          latitude: 37.7549632,
          longitude: -122.1968792,
        },
      },
    })
  }
}
