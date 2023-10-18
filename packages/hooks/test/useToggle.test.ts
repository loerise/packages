/* eslint-disable ramda/prefer-ramda-boolean */
import { act, renderHook, waitFor } from "@testing-library/react"

import { useToggle } from "../src"

describe("useToggle", () => {
  it("test state on init", async () => {
    const ToggleResult = renderHook(() => useToggle())
    await waitFor(() => expect(ToggleResult.result.current.state).toBeFalsy())
  })

  it("test state on init and default state to true", async () => {
    const ToggleResult = renderHook(() => useToggle({ initialState: true }))
    await waitFor(() => expect(ToggleResult.result.current.state).toBeTruthy())

    act(ToggleResult.result.current.handleOff)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeFalsy())
  })

  it("test state on toggle", async () => {
    const ToggleResult = renderHook(() => useToggle())
    await waitFor(() => expect(ToggleResult.result.current.state).toBeFalsy())

    act(ToggleResult.result.current.handleOn)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeTruthy())

    act(ToggleResult.result.current.handleOff)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeFalsy())

    act(ToggleResult.result.current.handleToggle)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeTruthy())

    act(ToggleResult.result.current.handleToggle)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeFalsy())
  })

  it("test state on toggle with value", async () => {
    const ToggleResult = renderHook(() => useToggle({ initialValue: "hello jest" }))
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeFalsy()
      expect(ToggleResult.result.current.value).toEqual("hello jest")
    })

    act(ToggleResult.result.current.handleOn)
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeTruthy()
      expect(ToggleResult.result.current.value).toEqual("hello jest")
    })

    act(ToggleResult.result.current.handleOff)
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeFalsy()
      expect(ToggleResult.result.current.value).toBeUndefined()
    })

    act(ToggleResult.result.current.handleOn)
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeTruthy()
      expect(ToggleResult.result.current.value).toEqual("hello jest")
    })

    act(ToggleResult.result.current.handleOff)
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeFalsy()
      expect(ToggleResult.result.current.value).toBeUndefined()
    })

    act(() => ToggleResult.result.current.handleOn("hello new value"))
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeTruthy()
      expect(ToggleResult.result.current.value).toEqual("hello new value")
    })

    act(() => ToggleResult.result.current.handleToggle("hello toggle with value"))
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeFalsy()
      expect(ToggleResult.result.current.value).toBeUndefined()
    })

    act(() => ToggleResult.result.current.handleToggle("hello toggle with value"))
    await waitFor(() => {
      expect(ToggleResult.result.current.state).toBeTruthy()
      expect(ToggleResult.result.current.value).toEqual("hello toggle with value")
    })
  })

  it("test state with beforeOn and should pass", async () => {
    const ToggleResult = renderHook(() =>
      useToggle({
        beforeOn: () => {
          return true
        },
      })
    )

    act(ToggleResult.result.current.handleOn)
    expect(ToggleResult.result.current.state).toBeTruthy()
  })

  it("test state with beforeOn and should not pass", async () => {
    const ToggleResult = renderHook(() =>
      useToggle({
        beforeOn: () => {
          return false
        },
      })
    )

    act(ToggleResult.result.current.handleOn)
    expect(ToggleResult.result.current.state).toBeFalsy()
  })

  it("test state with beforeOff and should pass", async () => {
    const ToggleResult = renderHook(() =>
      useToggle({
        initialState: true,
        beforeOff: () => {
          return true
        },
      })
    )

    act(ToggleResult.result.current.handleOff)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeFalsy())
  })

  it("test state with beforeOff and should not pass", async () => {
    const ToggleResult = renderHook(() =>
      useToggle({
        initialState: true,
        beforeOff: () => {
          return false
        },
      })
    )

    act(ToggleResult.result.current.handleOff)
    await waitFor(() => expect(ToggleResult.result.current.state).toBeTruthy())
  })
})
