type RuleType = "required" | "lt" | "lte" | "gt" | "gte" | "minLength" | "maxLength" | "integer" | "decimals" | "phone" | "vin" | "licensePlate" | "pattern" | "trim";
type FieldOriginalKey = number | string | (string | number)[];
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
type RegisterField = (key: FieldOriginalKey, configs?: FieldConfigs) => Record<string, any>;
type GetFieldValue = (key: FieldOriginalKey) => FieldValue;
type GetFieldsValue = () => FieldValues;
type SetFieldValue = (key: FieldOriginalKey, value: FieldValue) => void;
type SetFieldsValue = (value: FieldValues) => void;
type GetFieldError = (key: FieldOriginalKey) => FieldError["message"];
type ResetFields = () => void;
type UseFrom = (options?: {
    validateTrigger?: "onChange" | "onBlur";
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

type UseVisibleProps = <T>(options?: {
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

type AsyncStateRef = <T>(nextState: T) => Promise<T>;
type Index = <T>(initialState: T) => [T, AsyncStateRef];
declare const useAsyncState: Index;

export { useAsyncState, useForm, useVisible };
