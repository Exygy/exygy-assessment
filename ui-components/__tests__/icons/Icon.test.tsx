import React from "react"
import { render, cleanup } from "@testing-library/react"
import { Icon, IconFillColors } from "../../src/icons/Icon"

afterEach(cleanup)

describe("<Icon>", () => {
  it("renders without error", () => {
    render(<Icon size="2xl" symbol="profile" />)
  })
  it("can render with a custom class", () => {
    const { container } = render(
      <Icon size="2xl" symbol="profile" fill={IconFillColors.white} className={"custom-class"} />
    )
    expect(container.getElementsByClassName("custom-class").length).toBe(1)
  })
})
