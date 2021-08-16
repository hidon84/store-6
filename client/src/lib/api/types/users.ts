import { ApiResponse, UpdateInfo } from './common';

export interface UserInfo {
  email?: string;
  phone?: string;
  profile?: string;
}

export interface User extends UserInfo, UpdateInfo {
  id: string;
  phone: string;
}

/// //////////////////////////////////////////////////////////

export interface UsersPostRequestBody extends UserInfo {
  id: string;
  password: string;
  phone: string;
  type?: string;
}
export interface UsersPutRequestBody extends UserInfo {
  password?: string;
}
export interface UsersGetResponseBody extends User {
  createdAt: string;
  updatedAt: string;
}
export interface UsersPostResponseBody extends UpdateInfo {
  createdAt: string;
  updatedAt: string;
}
export interface UsersPutResponseBody extends UpdateInfo {
  createdAt: string;
  updatedAt: string;
}

/// //////////////////////////////////////////////////////////

export interface UserResponse extends ApiResponse, UpdateInfo {
  createdAt: Date;
  updatedAt: Date;
}
export interface UsersGetResponse extends UserResponse, User {
  id: string;
  email: string;
  profile: string;
  createdAt: Date;
  updatedAt: Date;
}
export type UsersPostResponse = UserResponse;
export type UsersPutResponse = UserResponse;
