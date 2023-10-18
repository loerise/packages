import { useState } from "react"
import { act, renderHook, waitFor } from "@testing-library/react"

import { useDebounce } from "../src"

describe("useDebounce", () => {
  it("test useDebounce", async () => {
    const RealtimeState = renderHook(() => useState("initial value"))
    const DebouncedState = renderHook(() => useDebounce("initial value"))

    await waitFor(() => expect(RealtimeState.result.current[0]).toEqual("initial value"))
    await waitFor(() => expect(DebouncedState.result.current).toEqual("initial value"))

    act(() => RealtimeState.result.current[1]("next value"))
    await waitFor(() => expect(RealtimeState.result.current[0]).toEqual("next value"))
    // await waitFor(() => expect(DebouncedState.result.current).toEqual("next value"))
  })
})
