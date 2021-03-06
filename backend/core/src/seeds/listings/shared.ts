// AMI Charts
import { ListingSeedType, PropertySeedType, UnitSeedType } from "./listings"

export const getDate = (days: number) => {
  const someDate = new Date()
  someDate.setDate(someDate.getDate() + days)
  return someDate
}

// Properties
export function getDefaultProperty() {
  return JSON.parse(JSON.stringify(defaultProperty))
}

export const defaultProperty: PropertySeedType = {
  buildingAddress: {
    city: "San Francisco",
    street: "548 Market Street",
  },
}

// Unit Sets
export function getDefaultUnits() {
  return JSON.parse(JSON.stringify(defaultUnits))
}

export const defaultUnits: Array<UnitSeedType> = [
  {
    monthlyIncomeMin: "3014",
    monthlyRent: "1219",
    monthlyRentAsPercentOfIncome: null,
  },
  {
    monthlyIncomeMin: "3468",
    monthlyRent: "1387",
    monthlyRentAsPercentOfIncome: null,
  },
]

// Listings
export function getDefaultListing() {
  return JSON.parse(JSON.stringify(defaultListing))
}

export const defaultListing: ListingSeedType = {
  name: "Default Listing Seed",
  applicationDueDate: getDate(10),
}
