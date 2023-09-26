import { Dispatch, SetStateAction, useCallback, useState } from "react"

interface UseBooleanOutput {
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

export const useBoolean = (defaultValue?: boolean): UseBooleanOutput => {
  const [value, updateValue] = useState(Boolean(defaultValue))

  const setTrue = useCallback(() => updateValue(true), [])
  const setFalse = useCallback(() => updateValue(false), [])
  const toggle = useCallback(() => updateValue((v) => !v), [])

  return { value, setValue: updateValue, setTrue, setFalse, toggle }
}
