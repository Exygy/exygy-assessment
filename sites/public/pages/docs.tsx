import Head from "next/head"
import Link from "next/link"
import { PageHeader, StandardTable } from "@bloom-housing/ui-components"
import Layout from "../layouts/application"

export default function Docs() {
  const pageTitle = "Exygy Assessment - Docs"

  const getEmphasizedText = (text: string) => {
    return <span className={"font-bold"}>{text}</span>
  }

  const exampleUnitHeaders = {
    unitType: "Unit Type",
    monthlyMinIncome: "Monthly Min. Income",
    monthlyRent: "Monthly Rent",
    monthlyRentPercentIncome: "Monthly Rent as % Income",
  }

  const exampleSummaryHeaders = {
    unitType: "Unit Type",
    monthlyMinIncome: "Minimum Income",
    rent: "Rent",
    availability: "Availability",
  }

  const exampleAUnitData = [
    {
      unitType: "Studio",
      monthlyMinIncome: "$1,468",
      monthlyRent: "$734",
      monthlyRentPercentIncome: "null",
    },
    {
      unitType: "Studio",
      monthlyMinIncome: "$1468",
      monthlyRent: "$734",
      monthlyRentPercentIncome: "null",
    },
  ]

  const exampleASummaryData = [
    {
      unitType: "Studio",
      monthlyMinIncome: "$1,468 per month",
      rent: "$734 per month",
      availability: "2 units",
    },
  ]

  const exampleBUnitData = [
    {
      unitType: "1 BR",
      monthlyMinIncome: "$1,763",
      monthlyRent: "$881",
      monthlyRentPercentIncome: "null",
    },
    {
      unitType: "1 BR",
      monthlyMinIncome: "$3,524",
      monthlyRent: "$1,762",
      monthlyRentPercentIncome: "null",
    },
  ]

  const exampleBSummaryData = [
    {
      unitType: "1 BR",
      monthlyMinIncome: "$1,763 to $3,524 per month",
      rent: "$881 to $1,762 per month",
      availability: "2 units",
    },
  ]

  const exampleCUnitData = [
    {
      unitType: "1 BR",
      monthlyMinIncome: "$1,763",
      monthlyRent: "$881",
      monthlyRentPercentIncome: "null",
    },
    {
      unitType: "1 BR",
      monthlyMinIncome: "$1,763",
      monthlyRent: "$881",
      monthlyRentPercentIncome: "null",
    },
    {
      unitType: "2 BR",
      monthlyMinIncome: "$0",
      monthlyRent: "null",
      monthlyRentPercentIncome: "30%",
    },
    {
      unitType: "2 BR",
      monthlyMinIncome: "$0",
      monthlyRent: "null",
      monthlyRentPercentIncome: "30%",
    },
    {
      unitType: "2 BR",
      monthlyMinIncome: "$2,036",
      monthlyRent: "$1,018",
      monthlyRentPercentIncome: "null",
    },
  ]

  const exampleCSummaryData = [
    {
      unitType: "1 BR",
      monthlyMinIncome: "$1,763 per month",
      rent: "$881 per month",
      availability: "2 units",
    },

    {
      unitType: "2 BR",
      monthlyMinIncome: "$0 per month",
      rent: "30% Income",
      availability: "2 units",
    },
    {
      unitType: "2 BR",
      monthlyMinIncome: "$2,036 per month",
      rent: "$1,018 per month",
      availability: "1 unit",
    },
  ]

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageHeader title="Documentation" />

      <div className={"flex flex-col p-12"}>
        <section className="aside-block">
          <h2 className="text-caps-underline">Overview</h2>
          <p>
            Thank you for taking the time to complete Exygy's take-home code assessment! If you have
            any questions about the assessment or directions at any time, please don't hesitate to
            reach out. This repo is a highly pared-down version of an Exygy product, Bloom.{" "}
            <Link href="https://housing.exygy.com/">
              <a>Bloom</a>
            </Link>{" "}
            is a web application that helps people learn about, apply for, and gain access to
            affordable housing. Its two core pieces of functionality are providing information about
            individual listings and the ability to submit digital applications for those listings.
            Listings for affordable housing units are often more complicated than your average
            rental listing due to various voucher programs, county-level housing preferences, and
            income adjustments that must be considered across applicant pools.
          </p>
        </section>
        <section className="aside-block">
          <h2 className="text-caps-underline">Assessment Part 1</h2>

          <p>
            For Part 1 of the assessment, we would like you to build unit summary tables for the
            three listings we have pre-populated. Unit summary tables help give end-users an
            overview of rent costs per unit type of a listing.
          </p>
          <p className={"pt-4"}>
            Every unit summary table is structured the same way. Each one has four columns -{" "}
            {getEmphasizedText("Unit Type")}, {getEmphasizedText("Minimum Income")},{" "}
            {getEmphasizedText("Rent")}, and {getEmphasizedText("Availability")}, and as many rows
            as there are unique unit type + rent method combinations amongst that listing's set of
            units. The possible unit types in sorted order are: {getEmphasizedText("Studio")},{" "}
            {getEmphasizedText("1 BR")}, {getEmphasizedText("2 BR")}, and{" "}
            {getEmphasizedText("3 BR")}. The possible unit rent methods are:{" "}
            {getEmphasizedText("Static")} and {getEmphasizedText("Percent Income")}. The rent
            methods are binary, so a unit is either priced at a static dollar amount or as percent
            of income. The rows are sorted first by Unit Type and then by Minimum Income.
          </p>
          <p className={"pt-4"}>
            Below are some examples of unit sets and what the unit summary table would look like for
            each set.
          </p>
          <div className={"pt-4"}>
            <span className={"font-semibold"}>Example A - Unit Data</span>
            <StandardTable headers={exampleUnitHeaders} data={exampleAUnitData} />
          </div>
          <div className={"pt-4"}>
            <span className={"font-semibold"}>Example A - Unit Summary Table</span>
            <StandardTable headers={exampleSummaryHeaders} data={exampleASummaryData} />
          </div>
          <p className={"pt-4 pb-12"}>
            Above for Example A we have two Studio units with the static rent method and the same
            minimum income and rent values, so we end up with one row and no value ranges.
          </p>
          <div className={"pt-4"}>
            <span className={"font-semibold"}>Example B - Unit Data</span>
            <StandardTable headers={exampleUnitHeaders} data={exampleBUnitData} />
          </div>
          <div className={"pt-4"}>
            <span className={"font-semibold"}>Example B - Unit Summary Table</span>
            <StandardTable headers={exampleSummaryHeaders} data={exampleBSummaryData} />
          </div>
          <p className={"pt-4 pb-12"}>
            Above for Example B we have two 1 BR units with the static rent method, but each unit
            has different minimum income and rent values so we end up with one row with value
            ranges.
          </p>
          <div className={"pt-4"}>
            <span className={"font-semibold"}>Example C - Unit Data</span>
            <StandardTable headers={exampleUnitHeaders} data={exampleCUnitData} />
          </div>
          <div className={"pt-4"}>
            <span className={"font-semibold"}>Example C - Unit Summary Table</span>
            <StandardTable headers={exampleSummaryHeaders} data={exampleCSummaryData} />
          </div>
          <p className={"pt-4 pb-12"}>
            Above for Example C we have two 1 BR units with the static rent method, two 2 BR units
            with the % income rent method, and one 2 BR unit with the static rent method. This is
            why you see two rows for the 2 BR unit type - each row represents a different rent
            method.
          </p>
          <p>
            Your task in Part 1 is to build the unit summary tables for each listing. You will input
            your table solution in {getEmphasizedText("part-one.tsx")} which renders the{" "}
            {getEmphasizedText("Assessment Part 1")} page in the navigation bar. Your implementation
            will be inside of our {getEmphasizedText("ListingsList")} component. We encourage you to
            use the {getEmphasizedText("StandardTable")} component out of our component library to
            display the data, and you are welcome to create new components in our component library
            if you choose.
          </p>
        </section>
        <section className="aside-block">
          <h2 className="text-caps-underline">Assessment Part 2</h2>
          <p>If you have time, move onto Part 2 of the assessment below.</p>
          <p className={"pt-4"}>
            For Part 2 of the assessment, we would like you to build a form that allows you to edit
            three of the main listing fields: {getEmphasizedText("listing.buildingAddress.street")},{" "}
            {getEmphasizedText("listing.buildingAddress.city")}, and{" "}
            {getEmphasizedText("listing.applicationDueDate")}. You will input your form solution in{" "}
            {getEmphasizedText("part-two.tsx")} which renders the{" "}
            {getEmphasizedText("Assessment Part 2")} page in the navigation bar. We encourage you to
            use the {getEmphasizedText("Select")}, {getEmphasizedText("Field")}, and{" "}
            {getEmphasizedText("DateField")} components.
          </p>
        </section>
        <section className="aside-block">
          <h2 className="text-caps-underline">Assessment Submission</h2>
          <p>Idk</p>
        </section>
      </div>
    </Layout>
  )
}
