import { NextFunction, Request, Response } from 'express';
import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';
import { Token } from '@/helper/jwt';

const verifyTokenSub =
  (sub: string) => (req: Request, _res: Response, next: NextFunction) => {
    if (req.token.sub === sub) {
      return next();
    }
    return next(new ErrorResponse(commonError.unauthorized));
  };

/**
 * Token의 Subject를 검사해서 Refresh Token인지를 검증합니다.
 *
 * @error Refresh Token이 아닐 경우 unauthorized 에러를 응답합니다.
 *
 * @need isAuth 미들웨어를 이 미들웨어 이전에 사용해야 합니다.
 */
export const isRefreshToken = verifyTokenSub(Token.Refresh);

/**
 * Token의 Subject를 검사해서 Access Token인지를 검증합니다.
 *
 * @error Access Token이 아닐 경우 unauthorized 에러를 응답합니다.
 *
 * @need isAuth 미들웨어를 이 미들웨어 이전에 사용해야 합니다.
 */
export const isAccessToken = verifyTokenSub(Token.Access);
