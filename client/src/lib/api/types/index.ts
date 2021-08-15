export interface ApiResponse {
  statusCode: number;
}

export interface ErrorResponseBody {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}

export interface AuthResponseBody {
  access: string;
}

export interface ErrorResponse extends ApiResponse, ErrorResponseBody {}

export interface AuthResponse extends ApiResponse, AuthResponseBody {}
