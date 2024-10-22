declare type Nullable<T> = T | null;
declare type VoidFunction = (...args: unknown[]) => void;
declare type AnyFunction<T> = (...args: never) => T;

declare type ErrorData = {
  message: string;
  description: string;
  error: string;
}

declare type ApiError = {
  status: number;
  data: ErrorData;
}
