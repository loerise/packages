import { renderHook, waitFor } from "@testing-library/react"

import { useStatePromise } from "../src"

describe("useStatePromise", () => {
  it("test useStatePromise", async () => {
    const StatePromiseResult = renderHook(() => useStatePromise("hello jest"))
    const [value, updateValue] = StatePromiseResult.result.current

    expect(value).toEqual("hello jest")
    await waitFor(() => expect(updateValue("next value")).resolves.toBe("next value"))
    await waitFor(() => expect(StatePromiseResult.result.current[0]).toEqual("next value"))
  })
})
