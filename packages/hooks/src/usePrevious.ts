import { useEffect, useRef } from "react"

interface UsePrevious {
  <T>(state: T): T | undefined
}
export const usePrevious: UsePrevious = (state) => {
  const ref = useRef<any>()

  useEffect(() => {
    ref.current = state
  })

  return ref.current
}
