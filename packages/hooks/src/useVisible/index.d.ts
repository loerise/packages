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
export declare const useVisible: UseVisibleProps;
export {};
