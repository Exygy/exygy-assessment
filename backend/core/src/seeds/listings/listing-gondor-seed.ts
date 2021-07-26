import { ListingSeedType, PropertySeedType, UnitSeedType } from "./listings"
import { getDate } from "./shared"

import { Listing } from "../../listings/entities/listing.entity"
import { BaseEntity, DeepPartial } from "typeorm"
import { UnitCreateDto } from "../../units/dto/unit.dto"
import { ListingDefaultSeed } from "./listing-default-seed"

const gondorProperty: PropertySeedType = {
  buildingAddress: {
    county: "Alameda",
    city: "Minas Tirith",
    street: "3320 Pelennor Ave",
    zipCode: "12345",
    state: "CA",
    latitude: 37.7549632,
    longitude: -122.1968792,
  },
}
const gondorUnits: Array<UnitSeedType> = [
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "3210",
    monthlyRent: "1284",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "3468",
    monthlyRent: "1387",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3468",
    monthlyRent: "1387",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3853",
    monthlyRent: "1541",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "0",
    monthlyRent: null,
    monthlyRentAsPercentOfIncome: "30",
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "4453",
    monthlyRent: "1781",
    monthlyRentAsPercentOfIncome: null,
  },
]

const gondorListing: ListingSeedType = {
  applicationDueDate: getDate(10),
  name: "Gondor",
}

export class ListingGondorSeed extends ListingDefaultSeed {
  async seed() {
    const unitTypeOneBdrm = await this.unitTypeRepository.findOneOrFail({ name: "oneBdrm" })
    const unitTypeTwoBdrm = await this.unitTypeRepository.findOneOrFail({ name: "twoBdrm" })
    const unitTypeThreeBdrm = await this.unitTypeRepository.findOneOrFail({ name: "threeBdrm" })

    const property = await this.propertyRepository.save({
      ...gondorProperty,
    })

    const unitsToBeCreated: Array<Omit<UnitCreateDto, keyof BaseEntity>> = gondorUnits.map(
      (unit) => {
        return {
          ...unit,
          property: {
            id: property.id,
          },
        }
      }
    )

    // Assign unit types
    for (let i = 0; i < 4; i++) {
      unitsToBeCreated[i].unitType = unitTypeOneBdrm
    }
    for (let i = 4; i < 27; i++) {
      unitsToBeCreated[i].unitType = unitTypeTwoBdrm
    }
    for (let i = 27; i < 46; i++) {
      unitsToBeCreated[i].unitType = unitTypeThreeBdrm
    }

    await this.unitsRepository.save(unitsToBeCreated)

    const listingCreateDto: Omit<
      DeepPartial<Listing>,
      keyof BaseEntity | "urlSlug" | "showWaitlist"
    > = {
      ...gondorListing,
      property: property,
    }

    return await this.listingRepository.save(listingCreateDto)
  }
}
