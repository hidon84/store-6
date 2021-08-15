import ApiResponse from './api';

export interface LoginRequestBody {
  id: string;
  password: string;
}

export interface AuthResponseBody {
  access: string;
}

export interface AuthResponse extends ApiResponse, AuthResponseBody {}
