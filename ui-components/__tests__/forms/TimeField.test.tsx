import React from "react"
import { render, cleanup } from "@testing-library/react"
import { TimeField } from "../../src/forms/TimeField"
import { useForm } from "react-hook-form"

afterEach(cleanup)

const DefaultTimeField = () => {
  const { register, watch, errors } = useForm({ mode: "onChange" })
  return (
    <TimeField
      id="time"
      label="Time"
      name="time"
      required={true}
      register={register}
      watch={watch}
      error={!!errors?.time}
    />
  )
}

describe("<TimeField>", () => {
  it("renders defalt state", () => {
    const { getByText } = render(<DefaultTimeField />)
    expect(getByText("Time")).toBeTruthy()
    expect(getByText("Hour")).toBeTruthy()
    expect(getByText("minutes")).toBeTruthy()
    expect(getByText("seconds")).toBeTruthy()
  })
})
