import { UpdateInfo } from './common';

export interface UsersPostRequestBody {
  id: string;
  password: string;
  type?: string;
  email?: string;
  phone: string;
  profile?: string;
  privacyTermsAndConditions: boolean;
  serviceTermsAndConditions: boolean;
}
export type UsersPostResponseBody = UpdateInfo;

export interface UsersGetResponseBody extends UpdateInfo {
  id: string;
  email: string;
  phone: string;
  profile: string;
}

export interface UsersPutRequestBody {
  password?: string;
  email?: string;
  phone?: string;
  profile?: File;
}
export type UsersPutResponseBody = UpdateInfo;
