import { useCallback, useRef, useState } from "react"
import * as R from "ramda"

type RuleType =
  | "required"
  | "lt"
  | "lte"
  | "gt"
  | "gte"
  | "minLength"
  | "maxLength"
  | "integer"
  | "decimals"
  | "phone"
  | "vin"
  | "licensePlate"
  | "pattern"
  | "trim"
type FieldKeyOriginal = number | string | (string | number)[]
type FieldKeyArray = (string | number)[]
type FieldKeys = string[]
type FieldValue = any
type FieldValues = Record<string, FieldValue> | FieldValue[]
type FieldRule = {
  pattern?: RegExp
  type: RuleType
  value?: number
  message?: string
}
type FieldError = { key: string; type: RuleType; message: string }
type FieldConfigs = {
  initialValue?: FieldValue
  placeholder?: string
  eventName?: string
  destroyEventName?: string
  valueName?: string
  valueKey?: string
  rules?: FieldRule[]
  interceptChange?: <T>(value: T) => boolean
  interceptValue?: <T>(value: T) => T
}

type GetFieldValue = (key: FieldKeyOriginal) => FieldValue
type GetFieldValues = () => FieldValues
type SetFieldValue = (key: FieldKeyOriginal, value: FieldValue) => void
type SetFieldValues = (value: FieldValues) => void
type ResetFieldValues = () => void

type GetFieldRules = (key: FieldKeyOriginal) => FieldRule[]
type SetFieldRules = (key: FieldKeyOriginal, value: FieldRule[]) => void

type GetFieldKeys = () => FieldKeys
type SetFieldKeys = (key: FieldKeyOriginal) => void

type GetFieldErrors = () => FieldError[]
type ResetFieldErrors = () => void
type GetFieldError = (key: FieldKeyOriginal) => FieldError["message"]
type SetFieldError = (key: FieldKeyOriginal, type: RuleType, message: string) => void
type RemoveFieldError = (key: FieldKeyOriginal, type: string) => void

type ValidateField = (key: FieldKeyOriginal, value: FieldValue) => void
type ValidateFields = () => void
type Validate = () => Promise<FieldValues>
type UnregisterField = (key: FieldKeyOriginal) => void
type RegisterField = (key: FieldKeyOriginal, configs?: FieldConfigs) => Record<string, any>

type UseFrom = (options?: {
  initialEventName?: "onChange" | "onInput" | "onChangeText" | string
  initialDestroyEventName?: "onDestroy" | string
  initialValueName?: string
  initialValueKey?: string
}) => {
  getFieldError: GetFieldError
  getFieldsValue: GetFieldValues
  getFieldValue: GetFieldValue
  registerField: RegisterField
  resetFields: ResetFieldValues
  setFieldsValue: SetFieldValues
  setFieldValue: SetFieldValue
  unregisterField: UnregisterField
  validate: Validate
}

const isEmpty = R.compose(R.either(R.isNil, R.isEmpty))
const ensureArrayKey: (key: FieldKeyOriginal) => FieldKeyArray = (key) => {
  if (isEmpty(key)) {
    return []
  } else if (key instanceof Array) {
    return key
  } else {
    return String(key).includes(".") ? String(key).split(".") : [key]
  }
}
const ensureStringKey: (key: FieldKeyOriginal) => string = (key) => {
  return ensureArrayKey(key).join(".")
}
/*
 * fieldValuesRef 的初始数据类型由 key 来判断
 * 1、key 是数组且下标 0 的数据是数字，fieldValuesRef 是数组类型
 * 2、其他情况 fieldValuesRef 是对象类型
 */
const ensureValueType: (key: FieldKeyOriginal, value: any) => Record<string, unknown> | [] = (key, value) => {
  return !isEmpty(value) ? value : isNaN(Number(ensureArrayKey(key)[0])) ? {} : []
}

export const useForm: UseFrom = (options = {}) => {
  const [, forceUpdate] = useState(0)

  const {
    initialEventName = "onChange",
    initialDestroyEventName = "onDestroy",
    initialValueName = "value",
    initialValueKey = "detail",
  } = options

  const initialFieldValuesRef = useRef<FieldValues>({})
  const fieldValuesRef = useRef<FieldValues>({})
  const fieldKeysRef = useRef<FieldKeys>([])
  const fieldRulesRef = useRef({})
  const fieldErrorsRef = useRef<FieldError[]>([])

  const getFieldValue: GetFieldValue = useCallback((key) => {
    return R.path(ensureArrayKey(key), fieldValuesRef.current)
  }, [])
  const getFieldValues: GetFieldValues = useCallback(() => {
    return fieldValuesRef.current
  }, [])
  const setFieldValue: SetFieldValue = useCallback((key, value) => {
    const computedValue = ensureValueType(key, fieldValuesRef.current)

    fieldValuesRef.current = R.assocPath(ensureArrayKey(key), value, computedValue)
    forceUpdate(new Date().getTime())
  }, [])
  const setFieldValues: SetFieldValues = useCallback((value) => {
    fieldValuesRef.current = R.mergeDeepRight(fieldValuesRef.current, value)
    forceUpdate(new Date().getTime())
  }, [])
  const resetFieldValues: ResetFieldValues = useCallback(() => {
    fieldValuesRef.current = R.clone(initialFieldValuesRef.current)
    forceUpdate(new Date().getTime())
  }, [])

  const getFieldRules: GetFieldRules = useCallback((key) => {
    return R.pathOr([], ensureArrayKey(key), fieldRulesRef.current)
  }, [])
  const setFieldRules: SetFieldRules = useCallback((key, value) => {
    fieldRulesRef.current = R.assocPath(ensureArrayKey(key), value, fieldRulesRef.current)
  }, [])

  const getFieldKeys: GetFieldKeys = useCallback(() => {
    return fieldKeysRef.current
  }, [])
  const setFieldKeys: SetFieldKeys = useCallback((key) => {
    fieldKeysRef.current.push(ensureStringKey(key))
  }, [])

  const getFieldErrors: GetFieldErrors = useCallback(() => {
    return fieldErrorsRef.current
  }, [])
  const resetFieldErrors: ResetFieldErrors = useCallback(() => {
    fieldErrorsRef.current = []
  }, [])
  const getFieldError: GetFieldError = useCallback((key) => {
    return R.compose(
      R.propOr("", "message"),
      R.head,
      R.filter(R.propEq("key", ensureStringKey(key)))
    )(fieldErrorsRef.current) as string
  }, [])
  const setFieldError: SetFieldError = useCallback((key, type, message) => {
    const computedKey = ensureStringKey(key)

    fieldErrorsRef.current = R.compose(
      R.uniq,
      R.prepend({
        key: computedKey,
        type,
        message,
      })
    )(fieldErrorsRef.current)
  }, [])
  const removeFieldError: RemoveFieldError = useCallback((key, type) => {
    const computedKey = ensureStringKey(key)
    fieldErrorsRef.current = R.reject(
      R.both(R.propEq("key", computedKey) as any, R.propEq("type", type) as any),
      fieldErrorsRef.current
    )
  }, [])

  const validateField: ValidateField = useCallback(
    (key, value) => {
      const rules = getFieldRules(key)
      if (isEmpty(rules)) return

      R.forEach((rule) => {
        const type = R.prop("type", rule)
        const message = R.prop("message", rule)

        switch (type) {
          case "required":
            if (isEmpty(value)) {
              setFieldError(key, type, R.defaultTo("该字段为必填项", message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "lt":
            if (!isEmpty(value) && Number(value) < Number(rule.value)) {
              setFieldError(key, type, R.defaultTo(`该字段不能大于${rule.value}`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "lte":
            if (!isEmpty(value) && Number(value) <= Number(rule.value)) {
              setFieldError(key, type, R.defaultTo(`该字段不能大于等于${rule.value}`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "gt":
            if (!isEmpty(value) && Number(value) > Number(rule.value)) {
              setFieldError(key, type, R.defaultTo(`该字段不能小于${rule.value}`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "gte":
            if (!isEmpty(value) && Number(value) >= Number(rule.value)) {
              setFieldError(key, type, R.defaultTo(`该字段不能小于等于${rule.value}`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "minLength":
            if (!isEmpty(value) && R.lt(R.length(String(value)), Number(rule.value))) {
              setFieldError(key, type, R.defaultTo(`该字段不能小于${rule.value}位`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "maxLength":
            if (!isEmpty(value) && R.gt(R.length(String(value)), Number(rule.value))) {
              setFieldError(key, type, R.defaultTo(`该字段不能大于${rule.value}位`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "integer":
            if (!isEmpty(value) && !/^(-?\d*)$/.test(String(value))) {
              setFieldError(key, type, R.defaultTo(`该字段为整数`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "decimals":
            if (!isEmpty(value) && !/^(-?\d*)([.]?\d{1,2})?$/.test(String(value))) {
              setFieldError(key, type, R.defaultTo(`该字段为整数或小数(保留小数点后两位)`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "phone":
            if (!isEmpty(value) && !/^[01]\d{10}$/.test(String(value))) {
              setFieldError(key, type, R.defaultTo("电话号码不正确", message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "vin":
            if (!isEmpty(value) && !/^[A-HJ-NPR-Z\d]{17}$/.test(String(value))) {
              setFieldError(key, type, R.defaultTo("车架号码不正确", message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "licensePlate":
            if (
              !isEmpty(value) &&
              !/^[京津沪渝冀晋辽吉黑苏浙皖川闽赣鲁豫鄂湘粤琼黔滇陕甘青台蒙桂藏宁新领使临][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(
                String(value)
              )
            ) {
              setFieldError(key, type, R.defaultTo("车牌号码不正确", message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "pattern":
            if (!isEmpty(value) && rule.pattern !== undefined && !rule.pattern.test(String(value))) {
              setFieldError(key, type, R.defaultTo(`验证不通过`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          case "trim":
            if (isEmpty(value?.trim())) {
              setFieldError(key, type, R.defaultTo(`字段不能为空格`, message))
            } else {
              removeFieldError(key, type)
            }
            break
          default:
            break
        }
      }, rules)
    },
    [getFieldRules, removeFieldError, setFieldError]
  )
  const validateFields: ValidateFields = useCallback(() => {
    resetFieldErrors()
    R.map((key) => {
      validateField(key, getFieldValue(key))
    }, getFieldKeys())
  }, [resetFieldErrors, getFieldKeys, getFieldValue, validateField])
  const validate: Validate = useCallback(() => {
    validateFields()

    return new Promise((resolve, reject) => {
      const errors = getFieldErrors()

      if (isEmpty(errors)) {
        resolve(getFieldValues())
      } else {
        reject(errors)
      }
    })
  }, [getFieldErrors, getFieldValues, validateFields])
  const unregisterField: UnregisterField = useCallback((key) => {
    fieldKeysRef.current = R.reject(R.equals(ensureStringKey(key)), fieldKeysRef.current)
    fieldValuesRef.current = R.dissocPath(ensureArrayKey(key), fieldValuesRef.current)
    fieldRulesRef.current = R.dissocPath(ensureArrayKey(key), fieldRulesRef.current)
    initialFieldValuesRef.current = R.mergeDeepRight(
      R.defaultTo({}, initialFieldValuesRef.current),
      R.dissocPath(ensureArrayKey(key))
    )

    forceUpdate(new Date().getTime())
  }, [])
  const registerField: RegisterField = useCallback(
    (key, configs = {}) => {
      const {
        eventName = initialEventName,
        destroyEventName = initialDestroyEventName,
        valueName = initialValueName,
        valueKey = initialValueKey,
        initialValue,
        placeholder,
        rules = [],
        interceptChange,
        interceptValue,
      } = configs

      const computedInitialValue = R.defaultTo(null, initialValue)

      if (getFieldValue(key) === undefined) {
        setFieldKeys(key)
        setFieldRules(key, rules)
        setFieldValue(key, computedInitialValue)
        initialFieldValuesRef.current = R.mergeDeepRight(
          R.defaultTo({}, initialFieldValuesRef.current),
          R.assocPath(ensureArrayKey(key), computedInitialValue)
        )
      }
      const handleChange = (event: unknown) => {
        const interceptChangeResult =
          typeof interceptChange === "function" ? interceptChange(fieldValuesRef.current) : true
        if (!interceptChangeResult) return

        const computedValue = isEmpty(ensureArrayKey(valueKey)) ? event : R.path(ensureArrayKey(valueKey), event)
        const interceptedValue = typeof interceptValue === "function" ? interceptValue(computedValue) : computedValue

        if (initialEventName !== "onBlur") validateField(key, interceptedValue)
        setFieldValue(key, interceptedValue)
      }

      return {
        [valueName]: R.defaultTo(placeholder, getFieldValue(key)),
        [eventName]: handleChange,
        [destroyEventName]: () => unregisterField(key),
      }
    },
    [
      getFieldValue,
      initialDestroyEventName,
      initialEventName,
      initialValueKey,
      initialValueName,
      setFieldKeys,
      setFieldRules,
      setFieldValue,
      unregisterField,
      validateField,
    ]
  )

  return {
    getFieldError,
    getFieldsValue: getFieldValues,
    getFieldValue,
    registerField,
    resetFields: resetFieldValues,
    setFieldsValue: setFieldValues,
    setFieldValue,
    unregisterField,
    validate,
  }
}
