import { act, renderHook, waitFor } from "@testing-library/react"

import { useForm } from "../src"

describe("useForm", () => {
  it("test form on init", async () => {
    const hook = renderHook(() => useForm())
    const { getFieldValues } = hook.result.current

    expect(getFieldValues()).toEqual({})
  })

  it("test form on unregister field", async () => {
    const hook = renderHook(() => useForm())
    const { registerField, unregisterField, getFieldValues } = hook.result.current

    act(() => {
      registerField("a", { initialValue: 1 })
      registerField("b", { initialValue: 2 })
    })
    await waitFor(() => expect(getFieldValues()).toEqual({ a: 1, b: 2 }))

    act(() => {
      unregisterField("a")
    })
    await waitFor(() => expect(getFieldValues()).toEqual({ b: 2 }))

    act(() => {
      unregisterField("b")
    })
    await waitFor(() => expect(getFieldValues()).toEqual({}))
  })

  it("test form key:string", async () => {
    const hook = renderHook(() => useForm())
    const { registerField, getFieldValues, setFieldValue, setFieldValues, resetFieldValues } = hook.result.current

    expect(getFieldValues()).toEqual({})

    act(() => {
      registerField("a", { initialValue: 1 })
    })
    await waitFor(() => expect(getFieldValues()).toEqual({ a: 1 }))

    act(() => setFieldValue("a", 2))
    await waitFor(() => expect(getFieldValues()).toEqual({ a: 2 }))

    act(() => setFieldValues({ a: 2, b: 3 }))
    await waitFor(() => expect(getFieldValues()).toEqual({ a: 2, b: 3 }))

    act(() => resetFieldValues())
    await waitFor(() => expect(getFieldValues()).toEqual({}))
  })

  it("test form key:array", async () => {
    const hook = renderHook(() => useForm())
    const { registerField, getFieldValues, setFieldValue, resetFieldValues } = hook.result.current

    act(() => {
      registerField(["a", "b", 0, "c"])
    })
    await waitFor(() => expect(getFieldValues()).toEqual({ a: { b: [{ c: null }] } }))

    act(() => setFieldValue(["a", "b", 0, "c"], 1))
    await waitFor(() => expect(getFieldValues()).toEqual({ a: { b: [{ c: 1 }] } }))

    act(() => resetFieldValues())
    await waitFor(() => expect(getFieldValues()).toEqual({}))

    act(() => registerField([0, "a", "b", "c"]))
    await waitFor(() => expect(getFieldValues()).toEqual([{ a: { b: { c: null } } }]))

    act(() => setFieldValue([0, "a", "b", "c"], 1))
    await waitFor(() => expect(getFieldValues()).toEqual([{ a: { b: { c: 1 } } }]))

    act(() => setFieldValue([1, "a", "b", "c"], 2))
    await waitFor(() => expect(getFieldValues()).toEqual([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }]))

    act(() => registerField([2, "a", "b", "c"]))
    await waitFor(() =>
      expect(getFieldValues()).toEqual([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }, { a: { b: { c: null } } }])
    )

    act(() => setFieldValue([2, "a", "b", "c"], 3))
    await waitFor(() =>
      expect(getFieldValues()).toEqual([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }, { a: { b: { c: 3 } } }])
    )
  })

  it("test form key:mixed", async () => {
    const hook = renderHook(() => useForm())
    const { registerField, getFieldValues, setFieldValue } = hook.result.current

    act(() => registerField(["a", "b"]))
    await waitFor(() => expect(getFieldValues()).toEqual({ a: { b: null } }))

    act(() => setFieldValue(["a", "b", "c", 0], 1))
    await waitFor(() => expect(getFieldValues()).toEqual({ a: { b: { c: [1] } } }))
  })

  it("test form rule:required", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => registerField("a", { rules: [{ type: "required", message: "error" }] }))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "required" }]))

    act(() => setFieldValue("a", 1))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 1 }))
  })

  it("test form rule:lt and lte", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => {
      registerField("a", {
        rules: [{ type: "lte", value: 1, message: "error" }],
      })
      registerField("b", {
        rules: [{ type: "lt", value: 2, message: "error" }],
      })
    })

    act(() => setFieldValue("a", 1))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "lte" }]))

    act(() => setFieldValue("a", 2))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 2, b: null }))

    act(() => setFieldValue("b", 1))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "b", message: "error", type: "lt" }]))

    act(() => setFieldValue("b", 2))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 2, b: 2 }))
  })

  it("test form rule:gt and gte", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => {
      registerField("a", {
        rules: [{ type: "gte", value: 1, message: "error" }],
      })
      registerField("b", {
        rules: [{ type: "gt", value: 2, message: "error" }],
      })
    })

    act(() => setFieldValue("a", 1))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "gte" }]))

    act(() => setFieldValue("a", 0))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 0, b: null }))

    act(() => setFieldValue("b", 3))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "b", message: "error", type: "gt" }]))

    act(() => setFieldValue("b", 2))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 0, b: 2 }))
  })

  it("test form rule:minLength and maxLength", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => {
      registerField("a", {
        initialValue: 1,
        rules: [
          { type: "minLength", value: 2, message: "error" },
          { type: "maxLength", value: 4, message: "error" },
        ],
      })
    })
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "minLength" }]))

    act(() => setFieldValue("a", 1))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "minLength" }]))

    act(() => setFieldValue("a", 12345))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "maxLength" }]))

    act(() => setFieldValue("a", 12))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 12 }))

    act(() => setFieldValue("a", 1234))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: 1234 }))
  })

  it("test form rule:phone", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => {
      registerField("a", {
        initialValue: 1,
        rules: [{ type: "phone", message: "error" }],
      })
    })

    act(() => setFieldValue("a", "1234567890"))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "phone" }]))

    act(() => setFieldValue("a", "12345678901"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "12345678901" }))

    act(() => setFieldValue("a", "02345678901"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "02345678901" }))
  })

  it("test form rule:vin", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => {
      registerField("a", {
        initialValue: 1,
        rules: [{ type: "vin", message: "error" }],
      })
    })

    act(() => setFieldValue("a", "1234567890123456Q"))
    await waitFor(() => expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "vin" }]))

    act(() => setFieldValue("a", "12345678901234567"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "12345678901234567" }))
  })

  it("test form rule:license plate", async () => {
    const hook = renderHook(() => useForm())
    const { validate, registerField, setFieldValue } = hook.result.current

    act(() => {
      registerField("a", {
        initialValue: 1,
        rules: [{ type: "licensePlate", message: "error" }],
      })
    })

    act(() => setFieldValue("a", "中A12345"))
    await waitFor(() =>
      expect(validate()).rejects.toStrictEqual([{ key: "a", message: "error", type: "licensePlate" }])
    )

    act(() => setFieldValue("a", "京A12345"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "京A12345" }))

    act(() => setFieldValue("a", "京A12345警"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "京A12345警" }))

    act(() => setFieldValue("a", "京A123456"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "京A123456" }))

    act(() => setFieldValue("a", "京A12345警"))
    await waitFor(() => expect(validate()).resolves.toStrictEqual({ a: "京A12345警" }))
  })
})
