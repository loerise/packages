/* eslint-disable ramda/prefer-ramda-boolean */
import { useCallback } from "react"
import * as R from "ramda"

import { useStatePromise } from "./useStatePromise"

type UseToggleProps = <T = any>(options?: {
  initialState?: boolean
  initialValue?: T | undefined
  beforeOn?: () => boolean
  afterOn?: () => void
  beforeOff?: () => boolean
  afterOff?: () => void
}) => {
  state: boolean
  value: T | undefined
  handleOn: (nextValue?: unknown) => void
  handleOff: () => void
  handleToggle: (nextValue?: unknown) => void
}
export const useToggle: UseToggleProps = (options = {}) => {
  const {
    initialState = false,
    initialValue,
    beforeOn: beforeShow = () => true,
    beforeOff: beforeHide = () => true,
    afterOn: afterShow = () => {},
    afterOff: afterHide = () => {},
  } = options

  const [state, updateState] = useStatePromise<boolean>(initialState)
  const [value, updateValue] = useStatePromise<any>(initialValue)

  const callback = useCallback(() => {
    // 如果 lifeCycleResult 的值申明时指定为 false 则不通过，所以必须显式判断 === false
    if (!beforeShow()) return

    updateState(true).then(afterShow)
  }, [afterShow, beforeShow, updateState])

  const handleOn = useCallback(
    (nextValue: unknown) => {
      if (!R.equals(nextValue, initialValue)) {
        updateValue(R.defaultTo(initialValue, nextValue)).then(callback)
      } else {
        callback()
      }
    },
    [callback, initialValue, updateValue]
  )
  const handleOff = useCallback(() => {
    // 如果 lifeCycleResult 的值申明时指定为 false 则不通过，所以必须显式判断 === false
    if (!beforeHide()) return

    updateState(false).then(() => {
      updateValue(undefined).then(afterHide)
    })
  }, [afterHide, beforeHide, updateValue, updateState])
  const handleToggle = useCallback(
    (nextValue?: unknown) => {
      !state ? handleOn(nextValue) : handleOff()
    },
    [state, handleOn, handleOff]
  )

  return {
    state,
    value,
    handleOn,
    handleOff,
    handleToggle,
  }
}
