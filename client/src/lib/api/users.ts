import request from './request';
import {
  UsersGetResponseBody,
  UsersPostRequestBody,
  UsersPostResponseBody,
  UsersPutRequestBody,
  UsersPutResponseBody,
} from './types';

export const usersBaseUrl = '/api/users';

export const usersUrl = {
  users: usersBaseUrl,
  me: `${usersBaseUrl}/me`,
};

export const postUser = (reqData: UsersPostRequestBody) =>
  request<UsersPostResponseBody, UsersPostRequestBody>(
    'POST',
    usersUrl.users,
    reqData,
  );

export const getMe = () => request<UsersGetResponseBody>('GET', usersUrl.me);

export const putMe = (reqData: UsersPutRequestBody) => {
  const reqFormData = new FormData();
  Object.entries(reqData).forEach((data) => {
    reqFormData.append(data[0], data[1]);
  });
  return request<UsersPutResponseBody, FormData>(
    'PUT',
    usersUrl.me,
    reqFormData,
  );
};

export const deleteMe = () => request('DELETE', usersUrl.me);
