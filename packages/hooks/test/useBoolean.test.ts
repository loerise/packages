/* eslint-disable ramda/prefer-ramda-boolean */
import { act, renderHook, waitFor } from "@testing-library/react"

import { useBoolean } from "../src"

describe("useBoolean", () => {
  it("test useBoolean", async () => {
    const BooleanResult = renderHook(() => useBoolean())
    const { setTrue, setFalse, toggle } = BooleanResult.result.current

    await waitFor(() => expect(BooleanResult.result.current.value).toBeFalsy())

    act(setTrue)
    await waitFor(() => expect(BooleanResult.result.current.value).toBeTruthy())

    act(setFalse)
    await waitFor(() => expect(BooleanResult.result.current.value).toBeFalsy())

    act(toggle)
    await waitFor(() => expect(BooleanResult.result.current.value).toBeTruthy())

    act(toggle)
    await waitFor(() => expect(BooleanResult.result.current.value).toBeFalsy())
  })
})
