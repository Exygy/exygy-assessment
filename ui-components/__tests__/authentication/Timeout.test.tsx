import React from "react"
import { render, cleanup } from "@testing-library/react"
import { LoggedInUserIdleTimeout } from "../../src/authentication/timeout"
import { AuthContext } from "../../src/authentication/AuthContext"

afterEach(cleanup)

describe("<Timeout>", () => {
  it("creates element if user is logged in", async () => {
    const onTimeoutSpy = jest.fn()
    const anchorMocked = document.createElement("div")
    const createElementSpy = jest.spyOn(document, "createElement").mockReturnValueOnce(anchorMocked)
    render(
      <AuthContext.Provider
        value={{
          profile: {
            roles: [],
            id: "1234",
            email: "",
            firstName: "Waffle",
            lastName: "House",
            dob: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          signOut: () => {},
        }}
      >
        <LoggedInUserIdleTimeout onTimeout={onTimeoutSpy} />
      </AuthContext.Provider>
    )
    expect(createElementSpy).toHaveBeenCalledTimes(2)
    createElementSpy.mockRestore()
  })

  it("does not create element if user is not logged in", async () => {
    const onTimeoutSpy = jest.fn()
    const anchorMocked = document.createElement("div")
    const createElementSpy = jest.spyOn(document, "createElement").mockReturnValueOnce(anchorMocked)
    render(
      <AuthContext.Provider
        value={{
          signOut: () => {},
        }}
      >
        <LoggedInUserIdleTimeout onTimeout={onTimeoutSpy} />
      </AuthContext.Provider>
    )
    expect(createElementSpy).toHaveBeenCalledTimes(1)
    createElementSpy.mockRestore()
  })
})
