import { ListingSeedType, PropertySeedType, UnitSeedType } from "./listings"
import { getDate } from "./shared"
import { ListingDefaultSeed } from "./listing-default-seed"
import { UnitCreateDto } from "../../units/dto/unit.dto"
import { BaseEntity, DeepPartial } from "typeorm"
import { Listing } from "../../listings/entities/listing.entity"

const rivendellProperty: PropertySeedType = {
  buildingAddress: {
    city: "Imladris",
    county: "San Mateo",
    state: "CA",
    street: "1697 Bruinen Ln",
    zipCode: "12345",
    latitude: 37.5658152,
    longitude: -122.2704286,
  },
}
const rivendellUnits: Array<UnitSeedType> = [
  {
    monthlyIncomeMin: "7058.0",
    monthlyRent: "3340.0",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4858.0",
    monthlyRent: "2624.0",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4858.0",
    monthlyRent: "2624.0",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4858.0",
    monthlyRent: "2624.0",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3246.0",
    monthlyRent: "1575.0",
    monthlyRentAsPercentOfIncome: null,
  },
]

const rivendellListing: ListingSeedType = {
  applicationDueDate: getDate(10),
  name: "Rivendell",
}

export class ListingRivendellSeed extends ListingDefaultSeed {
  async seed() {
    const unitTypeOneBdrm = await this.unitTypeRepository.findOneOrFail({ name: "oneBdrm" })
    const unitTypeTwoBdrm = await this.unitTypeRepository.findOneOrFail({ name: "twoBdrm" })

    const property = await this.propertyRepository.save({
      ...rivendellProperty,
    })

    const unitsToBeCreated: Array<Omit<UnitCreateDto, keyof BaseEntity>> = rivendellUnits.map(
      (unit) => {
        return {
          ...unit,
          property: {
            id: property.id,
          },
        }
      }
    )

    unitsToBeCreated[0].unitType = unitTypeTwoBdrm
    unitsToBeCreated[1].unitType = unitTypeOneBdrm
    unitsToBeCreated[2].unitType = unitTypeOneBdrm
    unitsToBeCreated[3].unitType = unitTypeOneBdrm
    unitsToBeCreated[4].unitType = unitTypeOneBdrm

    await this.unitsRepository.save(unitsToBeCreated)

    const listingCreateDto: Omit<
      DeepPartial<Listing>,
      keyof BaseEntity | "urlSlug" | "showWaitlist"
    > = {
      ...rivendellListing,
      property: property,
    }

    return await this.listingRepository.save(listingCreateDto)
  }
}
