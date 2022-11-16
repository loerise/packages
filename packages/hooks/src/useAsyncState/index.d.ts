declare type AsyncStateRef = <T>(nextState: T) => Promise<T>;
declare type Index = <T>(initialState: T) => [T, AsyncStateRef];
export declare const useAsyncState: Index;
export {};
