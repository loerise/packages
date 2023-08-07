declare type RuleType = "required" | "lt" | "lte" | "gt" | "gte" | "minLength" | "maxLength" | "integer" | "decimals" | "phone" | "vin" | "licensePlate" | "pattern" | "trim";
declare type FieldKeyOriginal = number | string | (string | number)[];
declare type FieldValue = any;
declare type FieldValues = Record<string, FieldValue> | FieldValue[];
declare type FieldRule = {
    pattern?: RegExp;
    type: RuleType;
    value?: number;
    message?: string;
};
declare type FieldError = {
    key: string;
    type: RuleType;
    message: string;
};
declare type FieldConfigs = {
    initialValue?: FieldValue;
    placeholder?: string;
    eventName?: string;
    valueName?: string;
    valueKey?: string;
    rules?: FieldRule[];
    interceptChange?: <T>(value: T) => boolean;
    interceptValue?: <T>(value: T) => T;
};
declare type Validate = () => Promise<FieldValues>;
declare type RegisterField = (key: FieldKeyOriginal, configs?: FieldConfigs) => Record<string, any>;
declare type GetFieldValue = (key: FieldKeyOriginal) => FieldValue;
declare type GetFieldsValue = () => FieldValues;
declare type SetFieldValue = (key: FieldKeyOriginal, value: FieldValue) => void;
declare type SetFieldsValue = (value: FieldValues) => void;
declare type GetFieldError = (key: FieldKeyOriginal) => FieldError["message"];
declare type ResetFields = () => void;
declare type UseFrom = (options?: {
    initialEventName?: "onChange" | "onBlur" | "onChangeText";
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

declare type UseVisibleProps = <T>(options?: {
    initialVisible?: boolean;
    initialValue?: T | undefined;
    beforeShow?: () => boolean;
    beforeHide?: () => boolean;
    afterShow?: () => void;
    afterHide?: () => void;
}) => {
    visible: boolean;
    value: T | undefined;
    handleShow: (nextValue?: unknown) => void;
    handleHide: () => void;
};
declare const useVisible: UseVisibleProps;

declare type AsyncStateRef = <T>(nextState: T) => Promise<T>;
declare type UseAsyncState = <T>(initialState: T) => [T, AsyncStateRef];
declare const useAsyncState: UseAsyncState;

export { useAsyncState, useForm, useVisible };
