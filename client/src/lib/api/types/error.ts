import { ApiResponse } from './common';

export interface ErrorResponseBody {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}

export class ErrorResponse
  extends Error
  implements ApiResponse<ErrorResponseBody>
{
  isApiRequestFailed: boolean;

  statusCode: number;

  data: ErrorResponseBody;

  constructor(statusCode: number, errorResponseBody: ErrorResponseBody) {
    super(errorResponseBody.message);
    this.statusCode = statusCode;
    this.data = errorResponseBody;

    this.isApiRequestFailed = true;

    // 오류가 발생한 위치에 대한 적절한 스택 추적을 유지합니다(V8에서만 사용 가능)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorResponse);
    }
  }
}
