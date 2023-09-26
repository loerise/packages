import { Dispatch, SetStateAction } from 'react';

interface UseBooleanOutput {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}
declare const useBoolean: (defaultValue?: boolean) => UseBooleanOutput;

declare const useDebounce: <T>(value?: T | undefined, delay?: number) => T | undefined;

type RuleType = "required" | "lt" | "lte" | "gt" | "gte" | "minLength" | "maxLength" | "integer" | "decimals" | "phone" | "vin" | "licensePlate" | "pattern" | "trim";
type FieldKeyOriginal = number | string | (string | number)[];
type FieldValue = any;
type FieldValues = Record<string, FieldValue> | FieldValue[];
type FieldRule = {
    pattern?: RegExp;
    type: RuleType;
    value?: number;
    message?: string;
};
type FieldError = {
    key: string;
    type: RuleType;
    message: string;
};
type FieldConfigs = {
    initialValue?: FieldValue;
    placeholder?: string;
    eventName?: string;
    valueName?: string;
    valueKey?: string;
    rules?: FieldRule[];
    interceptChange?: <T>(value: T) => boolean;
    interceptValue?: <T>(value: T) => T;
};
type Validate = () => Promise<FieldValues>;
type RegisterField = (key: FieldKeyOriginal, configs?: FieldConfigs) => Record<string, any>;
type GetFieldValue = (key: FieldKeyOriginal) => FieldValue;
type GetFieldsValue = () => FieldValues;
type SetFieldValue = (key: FieldKeyOriginal, value: FieldValue) => void;
type SetFieldsValue = (value: FieldValues) => void;
type GetFieldError = (key: FieldKeyOriginal) => FieldError["message"];
type ResetFields = () => void;
type UseFrom = (options?: {
    initialEventName?: "onChange" | "onInput" | "onChangeText" | string;
    initialValueName?: string;
    initialValueKey?: string;
}) => {
    validate: Validate;
    registerField: RegisterField;
    getFieldValue: GetFieldValue;
    getFieldsValue: GetFieldsValue;
    setFieldValue: SetFieldValue;
    setFieldsValue: SetFieldsValue;
    getFieldError: GetFieldError;
    resetFields: ResetFields;
};
declare const useForm: UseFrom;

declare const usePrevious: <T>(state: T) => T | undefined;

type UseStatePromise = <T = any>(initialState: T) => [state: T, updateStateCallback: (nextState: T) => Promise<SetStateAction<T>>];
declare const useStatePromise: UseStatePromise;

type UseToggleProps = <T = any>(options?: {
    initialState?: boolean;
    initialValue?: T | undefined;
    beforeOn?: () => boolean;
    afterOn?: () => void;
    beforeOff?: () => boolean;
    afterOff?: () => void;
}) => {
    state: boolean;
    value: T | undefined;
    handleOn: (nextValue?: unknown) => void;
    handleOff: () => void;
    handleToggle: (nextValue?: unknown) => void;
};
declare const useToggle: UseToggleProps;

export { useBoolean, useDebounce, useForm, usePrevious, useStatePromise, useToggle };
