import { renderHook, waitFor } from "@testing-library/react"

import { useAsyncState } from "../"

describe("useAsyncState", () => {
  it("test async state", async () => {
    const hook = renderHook(() => useAsyncState("hello jest"))
    const [value, updateValue] = hook.result.current

    expect(value).toEqual("hello jest")
    await waitFor(() => expect(updateValue("next value")).resolves.toBe("next value"))
  })
})
