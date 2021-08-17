import { ApiResponse } from './common';

export interface ErrorResponseBody {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}

export type ErrorResponse = ApiResponse<ErrorResponseBody>;
