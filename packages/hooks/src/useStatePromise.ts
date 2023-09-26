import { SetStateAction, useRef, useState } from "react"

type UseStatePromise = <T = any>(
  initialState: T
) => [state: T, updateStateCallback: (nextState: T) => Promise<SetStateAction<T>>]

export const useStatePromise: UseStatePromise = (initialState) => {
  const updateStatePromiseRef = useRef<any>(null)
  const [state, updateState] = useState<any>(initialState)

  updateStatePromiseRef.current = <T>(nextState: T) => {
    return new Promise((resolve) => {
      updateState(nextState)
      resolve(typeof nextState === "function" ? nextState(state) : nextState)
    })
  }

  return [state, updateStatePromiseRef.current]
}
