import React from "react"
import { cleanup } from "@testing-library/react"
import { occupancyTable, getOccupancyDescription } from "../../src/helpers/occupancyFormatting"
import Archer from "../../__tests__/fixtures/archer.json"
import { t } from "../../src/helpers/translator"
import { Listing } from "@bloom-housing/backend-core/types"

let ArcherListing: Listing = Object.assign({}, Archer) as any
// @ts-ignore
ArcherListing.unitsSummarized = {
  unitTypes: [
    {
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "threeBdrm",
    },
    {
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "twoBdrm",
    },
    {
      id: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      name: "SRO",
    },
  ],
  byUnitType: [
    {
      unitType: {
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "threeBdrm",
      },
      minIncomeRange: {
        min: "10",
        max: "20",
      },
      occupancyRange: {
        min: 2,
        max: 6,
      },
      rentAsPercentIncomeRange: {
        min: 15,
        max: 60,
      },
      rentRange: {
        min: "250",
        max: "350",
      },
      totalAvailable: 8,
      areaRange: {
        min: 5,
        max: 60,
      },
    },
    {
      unitType: {
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "twoBdrm",
      },
      minIncomeRange: {
        min: "10",
        max: "20",
      },
      occupancyRange: {
        min: 1,
        // TODO null is allowed on frontend but not in backend defined types
        // @ts-ignore
        max: null,
      },
      rentAsPercentIncomeRange: {
        min: 15,
        max: 60,
      },
      rentRange: {
        min: "250",
        max: "350",
      },
      totalAvailable: 8,
      areaRange: {
        min: 5,
        max: 60,
      },
    },
    {
      unitType: {
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "SRO",
      },
      minIncomeRange: {
        min: "10",
        max: "20",
      },
      occupancyRange: {
        min: 2,
        max: 1,
      },
      rentAsPercentIncomeRange: {
        min: 15,
        max: 60,
      },
      rentRange: {
        min: "250",
        max: "350",
      },
      totalAvailable: 8,
      areaRange: {
        min: 5,
        max: 60,
      },
    },
  ],
}

afterEach(cleanup)

describe("occupancy formatting helper", () => {
  it("properly creates occupany table", () => {
    expect(occupancyTable(ArcherListing)).toStrictEqual([
      {
        occupancy: "2-6 people",
        unitType: <strong>3 BR</strong>,
      },
      {
        occupancy: "at least 1 person",
        unitType: <strong>2 BR</strong>,
      },
      {
        occupancy: "1 person",
        unitType: <strong>Single Room Occupancy</strong>,
      },
    ])
  })
  it("properly creates occupany description for some SRO", () => {
    expect(getOccupancyDescription(ArcherListing)).toBe(t("listings.occupancyDescriptionSomeSro"))
  })
  it("properly creates occupany description for no SRO", () => {
    const NewListing = ArcherListing
    NewListing.unitsSummarized.unitTypes = [
      {
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "threeBdrm",
      },
      {
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "twoBdrm",
      },
    ]
    expect(getOccupancyDescription(NewListing)).toBe(t("listings.occupancyDescriptionNoSro"))
  })
  it("properly creates occupany description for all SRO", () => {
    const NewListing = ArcherListing
    NewListing.unitsSummarized.unitTypes = [
      {
        id: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "SRO",
      },
    ]
    expect(getOccupancyDescription(NewListing)).toBe(t("listings.occupancyDescriptionAllSro"))
  })
})
