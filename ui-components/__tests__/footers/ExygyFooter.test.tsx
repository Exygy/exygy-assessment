import React from "react"
import { render, cleanup } from "@testing-library/react"
import { ExygyFooter } from "../../src/footers/ExygyFooter"

afterEach(cleanup)

describe("<ExygyFooter>", () => {
  it("renders without error", () => {
    const { getByText } = render(<ExygyFooter />)
    expect(getByText("exygy")).not.toBeNull()
  })
})
