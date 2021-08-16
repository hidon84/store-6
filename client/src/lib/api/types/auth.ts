import { ApiResponse } from './common';

export interface LoginRequestBody {
  id: string;
  password: string;
}

export interface AuthResponseBody {
  access: string;
}

export type AuthResponse = ApiResponse<AuthResponseBody>;
