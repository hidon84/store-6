import ApiResponse from './api';

export interface ErrorResponseBody {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}

export interface ErrorResponse extends ApiResponse, ErrorResponseBody {}
