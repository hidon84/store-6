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

export const isRefreshToken = verifyTokenSub(Token.Refresh);
export const isAccessToken = verifyTokenSub(Token.Access);
