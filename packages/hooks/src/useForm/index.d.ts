declare type FieldOriginalKey = string | string[];
declare type FieldValue = any;
declare type FieldValues = Record<string, FieldValue> | FieldValue[];
declare type FieldRule = {
    type: string;
    message?: string;
    value?: number;
    pattern?: RegExp;
};
declare type FieldError = {
    key: string;
    type: string;
    message: string;
};
declare type FieldConfigs = {
    eventName: string;
    valueName: string;
    valueKey: string;
    initialValue: FieldValue;
    placeholder: string;
    rules: FieldRule[];
    interceptChange: <T>(value: T) => boolean;
    interceptValue: <T>(value: T) => T;
};
declare type Validate = () => Promise<FieldValues>;
declare type RegisterField = (key: FieldOriginalKey, configs: FieldConfigs) => Record<string, any>;
declare type GetFieldValue = (key: FieldOriginalKey) => FieldValue;
declare type GetFieldsValue = () => FieldValues;
declare type SetFieldValue = (key: FieldOriginalKey, value: FieldValue) => void;
declare type SetFieldsValue = (value: FieldValues) => void;
declare type GetFieldError = (key: FieldOriginalKey) => FieldError["message"];
declare type ResetFields = () => void;
declare type UseFrom = (options?: {
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
export declare const useForm: UseFrom;
export {};
