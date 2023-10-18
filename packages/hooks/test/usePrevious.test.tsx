import { renderHook } from "@testing-library/react"

import { usePrevious } from "../src"

it("should return undefined on initial render", () => {
  const { result } = renderHook(({ state }) => usePrevious(state), { initialProps: { state: 0 } })
  expect(result.current).toBeUndefined()
})

it("should always return previous state after each update", () => {
  const { result, rerender } = renderHook(({ state }) => usePrevious(state), { initialProps: { state: 0 } })

  rerender({ state: 2 })
  expect(result.current).toBe(0)

  rerender({ state: 4 })
  expect(result.current).toBe(2)

  rerender({ state: 6 })
  expect(result.current).toBe(4)
})
