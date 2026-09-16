export type ApiSuccessResponse<T> = {
  Response: "True";
} & T;

export type ApiErrorResponse = {
  Response: "False";
  Error: string;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
