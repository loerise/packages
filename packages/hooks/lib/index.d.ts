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
    destroyEventName?: string;
    valueName?: string;
    valueKey?: string;
    rules?: FieldRule[];
    interceptChange?: (value: FieldValue) => boolean;
    interceptValue?: (value: FieldValue) => FieldValue;
};
type GetFieldValue = (key: FieldKeyOriginal) => FieldValue;
type GetFieldValues = () => FieldValues;
type SetFieldValue = (key: FieldKeyOriginal, value: FieldValue) => void;
type SetFieldValues = (value: FieldValues) => void;
type ResetFieldValues = () => void;
type GetFieldError = (key: FieldKeyOriginal) => FieldError["message"];
type Validate = () => Promise<FieldValues>;
type UnregisterField = (key: FieldKeyOriginal) => void;
type RegisterField = (key: FieldKeyOriginal, configs?: FieldConfigs) => Record<string, any>;
type UseFrom = (options?: {
    initialEventName?: "onChange" | "onInput" | "onChangeText" | string;
    initialDestroyEventName?: "onDestroy" | string;
    initialValueName?: string;
    initialValueKey?: string;
}) => {
    getFieldError: GetFieldError;
    getFieldValues: GetFieldValues;
    getFieldValue: GetFieldValue;
    registerField: RegisterField;
    resetFieldValues: ResetFieldValues;
    setFieldValues: SetFieldValues;
    setFieldValue: SetFieldValue;
    unregisterField: UnregisterField;
    validate: Validate;
};
declare const useForm: UseFrom;

interface UsePrevious {
    <T>(state: T): T | undefined;
}
declare const usePrevious: UsePrevious;

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
