import { useState, useRef } from "react"

type AsyncStateRef = <T>(nextState: T) => Promise<T>
type Index = <T>(initialState: T) => [T, AsyncStateRef]

export const useAsyncState: Index = (initialState) => {
  const updateAsyncStateRef = useRef<AsyncStateRef>()
  const [state, updateState] = useState<any>(initialState)

  updateAsyncStateRef.current = (nextState) => {
    return new Promise((resolve) => {
      updateState(nextState)
      resolve(nextState)
    })
  }

  return [state, updateAsyncStateRef.current]
}
