import { useCallback, useRef, useState } from "react"
import * as R from "ramda"

const isEmpty = R.compose(R.either(R.isNil, R.isEmpty))

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
type FieldOriginalKey = number | string | (string | number)[]
type FieldArrayKey = (string | number)[]
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
  valueName?: string
  valueKey?: string
  rules?: FieldRule[]
  interceptChange?: <T>(value: T) => boolean
  interceptValue?: <T>(value: T) => T
}

type Validate = () => Promise<FieldValues>
type RegisterField = (key: FieldOriginalKey, configs?: FieldConfigs) => Record<string, any>
type GetFieldValue = (key: FieldOriginalKey) => FieldValue
type GetFieldsValue = () => FieldValues
type SetFieldValue = (key: FieldOriginalKey, value: FieldValue) => void
type SetFieldsValue = (value: FieldValues) => void
type GetFieldError = (key: FieldOriginalKey) => FieldError["message"]
type ResetFields = () => void

type UseFrom = (options?: { validateTrigger?: "onChange" | "onBlur" }) => {
  validate: Validate
  registerField: RegisterField
  getFieldValue: GetFieldValue
  getFieldsValue: GetFieldsValue
  setFieldValue: SetFieldValue
  setFieldsValue: SetFieldsValue
  getFieldError: GetFieldError
  resetFields: ResetFields
}

export const useForm: UseFrom = (options = {}) => {
  const [, forceUpdate] = useState(0)
  const { validateTrigger = "onChange" } = options

  const initialFieldValuesRef = useRef<FieldValues>({})
  const fieldValuesRef = useRef<FieldValues>({})
  const fieldKeysRef = useRef<FieldKeys>([])
  const fieldRulesRef = useRef({})
  const fieldErrorsRef = useRef<FieldError[]>([])

  // 将 key 转为数组
  const ensureArrayKey: (key: FieldOriginalKey) => FieldArrayKey = useCallback((key) => {
    return key instanceof Array ? key : String(key).includes(".") ? String(key).split(".") : [key]
  }, [])
  const ensureStringKey: (key: FieldOriginalKey) => string = useCallback(
    (key) => {
      return ensureArrayKey(key).join(".")
    },
    [ensureArrayKey]
  )
  /*
   * fieldValuesRef的初始数据类型由key来判断
   * 1、key是数组且下标0的数据是数字，fieldValuesRef是数组类型
   * 2、其他情况fieldValuesRef是对象类型
   */
  const ensureValueType: (key: FieldOriginalKey, value: any) => Record<string, unknown> | [] = useCallback(
    (key, value) => {
      return !isEmpty(value) ? value : isNaN(Number(ensureArrayKey(key)[0])) ? {} : []
    },
    []
  )
  const getFieldValue: GetFieldValue = useCallback(
    (key) => {
      return R.path(ensureArrayKey(key), fieldValuesRef.current)
    },
    [ensureArrayKey]
  )
  const getFieldsValue: GetFieldsValue = useCallback(() => {
    return fieldValuesRef.current
  }, [])
  const setFieldValue: SetFieldValue = useCallback(
    (key, value) => {
      const computedValue = ensureValueType(key, fieldValuesRef.current)

      fieldValuesRef.current = R.assocPath(ensureArrayKey(key), value, computedValue)
      forceUpdate(new Date().getTime())
    },
    [ensureArrayKey, ensureValueType]
  )
  const setFieldsValue: SetFieldsValue = useCallback((value) => {
    fieldValuesRef.current = R.mergeDeepRight(fieldValuesRef.current, value)
    forceUpdate(new Date().getTime())
  }, [])
  const resetFields: ResetFields = useCallback(() => {
    fieldValuesRef.current = R.clone(initialFieldValuesRef.current)
    forceUpdate(new Date().getTime())
  }, [])

  const getFieldRules: (key: FieldOriginalKey) => FieldRule[] = useCallback(
    (key) => {
      return R.pathOr([], ensureArrayKey(key), fieldRulesRef.current)
    },
    [ensureArrayKey]
  )
  const setFieldRules: (key: FieldOriginalKey, value: FieldRule[]) => void = useCallback(
    (key, value) => {
      fieldRulesRef.current = R.assocPath(ensureArrayKey(key), value, fieldRulesRef.current)
    },
    [ensureArrayKey]
  )

  const getFieldKeys: () => FieldKeys = useCallback(() => {
    return fieldKeysRef.current
  }, [])
  const setFieldKeys: (key: FieldOriginalKey) => void = useCallback(
    (key) => {
      fieldKeysRef.current.push(ensureStringKey(key))
    },
    [ensureStringKey]
  )

  const getFieldErrors: () => FieldError[] = useCallback(() => {
    return fieldErrorsRef.current
  }, [])
  const getFieldError: GetFieldError = useCallback(
    (key) => {
      return R.compose(
        R.propOr("", "message"),
        R.head,
        R.filter(R.propEq("key", ensureStringKey(key)))
      )(fieldErrorsRef.current) as string
    },
    [ensureStringKey]
  )
  const setFieldError: (key: FieldOriginalKey, type: RuleType, message: string) => void = useCallback(
    (key, type, message) => {
      const computedKey = ensureStringKey(key)

      fieldErrorsRef.current = R.compose(
        R.uniq,
        R.prepend({
          key: computedKey,
          type,
          message,
        })
      )(fieldErrorsRef.current)
    },
    [ensureStringKey]
  )
  const removeFieldError: (key: FieldOriginalKey, type: string) => void = useCallback(
    (key, type) => {
      const computedKey = ensureStringKey(key)
      fieldErrorsRef.current = R.reject(
        R.both(R.propEq("key", computedKey) as any, R.propEq("type", type) as any),
        fieldErrorsRef.current
      )
    },
    [ensureStringKey]
  )

  const validateField: (key: FieldOriginalKey, value: FieldValue) => void = useCallback(
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
              !/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/.test(
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
  const validateFields = useCallback(() => {
    R.map((key) => {
      validateField(key, getFieldValue(key))
    }, getFieldKeys())
  }, [getFieldKeys, getFieldValue, validateField])
  const validate: Validate = useCallback(() => {
    validateFields()

    return new Promise((resolve, reject) => {
      const errors = getFieldErrors()

      if (isEmpty(errors)) {
        resolve(getFieldsValue())
      } else {
        reject(errors)
      }
    })
  }, [getFieldErrors, getFieldsValue, validateFields])
  const registerField: RegisterField = useCallback(
    (key, configs = {}) => {
      const {
        eventName = "onChange",
        valueName = "value",
        valueKey = "detail",
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
      const handleChange = (event) => {
        const interceptChangeResult =
          typeof interceptChange === "function" ? interceptChange(fieldValuesRef.current) : true
        if (!interceptChangeResult) return

        const computedValue = isEmpty(ensureArrayKey(valueKey)) ? event : R.path(ensureArrayKey(valueKey), event)
        const interceptedValue = typeof interceptValue === "function" ? interceptValue(computedValue) : computedValue

        if (validateTrigger === "onChange") validateField(key, interceptedValue)
        setFieldValue(key, interceptedValue)
      }

      return {
        [valueName]: R.defaultTo(placeholder, getFieldValue(key)),
        [eventName]: handleChange,
      }
    },
    [ensureArrayKey, getFieldValue, setFieldKeys, setFieldRules, setFieldValue, validateField, validateTrigger]
  )

  return {
    validate,
    registerField,
    getFieldValue,
    getFieldsValue,
    setFieldValue,
    setFieldsValue,
    getFieldError,
    resetFields,
  }
}
