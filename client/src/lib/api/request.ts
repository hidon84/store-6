import { AxiosResponse } from 'axios';
import client from './client';
import { ApiResponse, ErrorResponse, ErrorResponseBody, Method } from './types';

/**
 * HTTP 요청하는 함수.
 *
 * 순서대로 requestBody, responseBody, params에 대한 타입을 제네릭으로 받습니다.
 *
 * @param method 요청 메서드
 * @param url 요청 URL
 * @param body 요청 Body
 * @param successCallback 성공 시 호출되는 Callback
 * @param failureCallback 실패 시 호출되는 Callback
 * @returns 응답
 */
const request = async <RES = unknown, REQ = null, PARAMS = null>(
  method: Method,
  url: string,
  body?: REQ,
  params?: PARAMS,
  successCallback?: (response: AxiosResponse<RES>) => void,
  failureCallback?: (response: AxiosResponse<ErrorResponseBody>) => void,
): Promise<(RES & ApiResponse) | ErrorResponse> => {
  const response = (await client({
    method,
    url,
    params,
    ...(body && { data: body }),
  })) as AxiosResponse<RES | ErrorResponseBody>;

  const { status, data } = response;
  if (response.status >= 400) {
    const errorData = data as ErrorResponseBody;
    const errorResponse: ErrorResponse = { statusCode: status, ...errorData };

    if (failureCallback) {
      const axiosErrorResponse = response as AxiosResponse<ErrorResponse>;
      failureCallback(axiosErrorResponse);
    }
    return errorResponse;
  }

  if (successCallback) {
    const axiosErrorResponse = response as AxiosResponse<RES>;
    successCallback(axiosErrorResponse);
  }

  const responseData = data as RES;
  const resultResponse = {
    statusCode: status,
    ...responseData,
  };
  return resultResponse;
};

export default request;
