import { renderHook, act, waitFor } from "@testing-library/react"

import { useVisible } from "../"

describe("useVisible", () => {
  it("test visible on init", async () => {
    const hook = renderHook(() => useVisible())
    await waitFor(() => expect(hook.result.current.visible).toBeFalsy())
  })

  it("test visible on init and default visible to true", async () => {
    const hook = renderHook(() => useVisible({ initialVisible: true }))
    await waitFor(() => expect(hook.result.current.visible).toBeTruthy())

    act(hook.result.current.handleHide)
    await waitFor(() => expect(hook.result.current.visible).toBeFalsy())
  })

  it("test visible on toggle", async () => {
    const hook = renderHook(() => useVisible())
    await waitFor(() => expect(hook.result.current.visible).toBeFalsy())

    act(hook.result.current.handleShow)
    await waitFor(() => expect(hook.result.current.visible).toBeTruthy())

    act(hook.result.current.handleHide)
    await waitFor(() => expect(hook.result.current.visible).toBeFalsy())
  })

  it("test visible on toggle with value", async () => {
    const hook = renderHook(() => useVisible({ initialValue: "hello jest" }))
    await waitFor(() => {
      expect(hook.result.current.visible).toBeFalsy()
      expect(hook.result.current.value).toEqual("hello jest")
    })

    act(hook.result.current.handleShow)
    await waitFor(() => {
      expect(hook.result.current.visible).toBeTruthy()
      expect(hook.result.current.value).toEqual("hello jest")
    })

    act(hook.result.current.handleHide)
    await waitFor(() => {
      expect(hook.result.current.visible).toBeFalsy()
      expect(hook.result.current.value).toBeUndefined()
    })

    act(hook.result.current.handleShow)
    await waitFor(() => {
      expect(hook.result.current.visible).toBeTruthy()
      expect(hook.result.current.value).toEqual("hello jest")
    })

    act(hook.result.current.handleHide)
    await waitFor(() => {
      expect(hook.result.current.visible).toBeFalsy()
      expect(hook.result.current.value).toBeUndefined()
    })

    act(() => hook.result.current.handleShow("hello new value"))
    await waitFor(() => {
      expect(hook.result.current.visible).toBeTruthy()
      expect(hook.result.current.value).toEqual("hello new value")
    })
  })

  it("test visible with beforeShow and should pass", async () => {
    const hook = renderHook(() =>
      useVisible({
        beforeShow: () => {
          return true
        },
      })
    )

    act(hook.result.current.handleShow)
    expect(hook.result.current.visible).toBeTruthy()
  })

  it("test visible with beforeShow and should not pass", async () => {
    const hook = renderHook(() =>
      useVisible({
        beforeShow: () => {
          return false
        },
      })
    )

    act(hook.result.current.handleShow)
    expect(hook.result.current.visible).toBeFalsy()
  })

  it("test visible with beforeHide and should pass", async () => {
    const hook = renderHook(() =>
      useVisible({
        initialVisible: true,
        beforeHide: () => {
          return true
        },
      })
    )

    act(hook.result.current.handleHide)
    await waitFor(() => expect(hook.result.current.visible).toBeFalsy())
  })

  it("test visible with beforeHide and should not pass", async () => {
    const hook = renderHook(() =>
      useVisible({
        initialVisible: true,
        beforeHide: () => {
          return false
        },
      })
    )

    act(hook.result.current.handleHide)
    await waitFor(() => expect(hook.result.current.visible).toBeTruthy())
  })
})
