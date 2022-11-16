import { useCallback } from "react"
import * as R from "ramda"

import { useAsyncState } from "../useAsyncState"

type UseVisibleProps = <T>(options?: {
  initialVisible?: boolean
  initialValue?: T | undefined
  beforeShow?: () => boolean
  beforeHide?: () => boolean
  afterShow?: () => void
  afterHide?: () => void
}) => {
  visible: boolean
  value: T | undefined
  handleShow: (nextValue?: unknown) => void
  handleHide: () => void
}
export const useVisible: UseVisibleProps = (options = {}) => {
  const {
    initialVisible = false,
    initialValue,
    beforeShow = () => true,
    beforeHide = () => true,
    afterShow = () => {},
    afterHide = () => {},
  } = options

  const [visible, updateVisible] = useAsyncState<boolean>(initialVisible)
  const [value, updateValue] = useAsyncState(initialValue)

  const callback = useCallback(() => {
    // 如果 lifeCycleResult 的值申明时指定为 false 则不通过，所以必须显式判断 === false
    if (!beforeShow()) return

    updateVisible(true).then(afterShow)
  }, [afterShow, beforeShow, updateVisible])

  const handleShow = useCallback(
    (nextValue: unknown) => {
      if (!R.equals(nextValue, initialValue)) {
        updateValue(R.defaultTo(initialValue, nextValue)).then(callback)
      } else {
        callback()
      }
    },
    [callback, initialValue, updateValue]
  )
  const handleHide = useCallback(() => {
    // 如果 lifeCycleResult 的值申明时指定为 false 则不通过，所以必须显式判断 === false
    if (!beforeHide()) return

    updateVisible(false).then(() => {
      updateValue(undefined).then(afterHide)
    })
  }, [afterHide, beforeHide, initialValue, updateValue, updateVisible, value])

  return {
    visible,
    value,
    handleShow,
    handleHide,
  }
}
