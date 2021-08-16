import { AxiosResponse } from 'axios';
import client from './client';
import {
  ApiResponse,
  ErrorResponse,
  ErrorResponseBody,
  UsersGetResponse,
  UsersGetResponseBody,
  UsersPostRequestBody,
  UsersPostResponse,
  UsersPostResponseBody,
  UsersPutRequestBody,
  UsersPutResponse,
  UsersPutResponseBody,
  UpdateInfo,
} from './types';

export const usersBaseUrl = '/api/users';

export const usersUrl = {
  users: usersBaseUrl,
  me: `${usersBaseUrl}/me`,
};

const userRequest = <T extends UpdateInfo>(
  req: Promise<AxiosResponse<T | ErrorResponseBody>>,
): Promise<
  UsersGetResponse | UsersPostResponse | UsersPutResponse | ErrorResponse
> =>
  req.then((response) => {
    const { status, data } = response;
    if (response.status >= 400) {
      const errorData = data as ErrorResponseBody;
      const errorResponse: ErrorResponse = { statusCode: status, ...errorData };
      return errorResponse;
    }
    const userData = data as T;
    const userResponse = {
      statusCode: status,
      ...userData,
      createdAt: new Date(userData.createdAt),
      updatedAt: new Date(userData.updatedAt),
    };

    return userResponse;
  });

export const createUser = (
  reqData: UsersPostRequestBody,
): Promise<UsersPostResponse | ErrorResponse> =>
  userRequest<UsersPostResponseBody>(
    client.post<UsersPostResponseBody | ErrorResponseBody>(
      usersUrl.users,
      reqData,
    ),
  ).then((result) => {
    return result as UsersPostResponse | ErrorResponse;
  });

export const getMe = (): Promise<UsersGetResponse | ErrorResponse> =>
  userRequest<UsersGetResponseBody>(
    client.get<UsersGetResponseBody | ErrorResponseBody>(usersUrl.me),
  ).then((result) => {
    return result as UsersGetResponse | ErrorResponse;
  });

export const updateMe = (
  reqData: UsersPutRequestBody,
): Promise<UsersPutResponse | ErrorResponse> =>
  userRequest<UsersPutResponseBody>(
    client.put<UsersPutResponseBody | ErrorResponseBody>(usersUrl.me, reqData),
  ).then((result) => {
    return result as UsersPutResponse | ErrorResponse;
  });

export const deleteMe = (): Promise<ApiResponse | ErrorResponse> =>
  client.delete<undefined | ErrorResponseBody>(usersUrl.me).then((response) => {
    const { status, data } = response;
    return { statusCode: status, ...data };
  });
