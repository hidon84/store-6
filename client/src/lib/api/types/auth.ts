import ApiResponse from './api';

export interface AuthResponseBody {
  access: string;
}

export interface AuthResponse extends ApiResponse, AuthResponseBody {}
