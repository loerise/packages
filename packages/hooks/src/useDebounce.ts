import { useEffect, useState } from "react"

export const useDebounce = <T>(value?: T, delay = 300): T | undefined => {
  const [debouncedValue, updateDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => updateDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
