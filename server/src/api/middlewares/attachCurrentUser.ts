import { NextFunction, Request, Response } from 'express';
import { Connection } from 'typeorm';
import Container from 'typedi';
import { commonError } from '@/constants/error';
import UserRepository from '@/repository/user';
import ErrorResponse from '@/utils/errorResponse';

/**
 * express 미들웨어입니다. req.token의 idx를 사용해서
 *
 * 사용자 정보를 가져와 req.currentUser에 넣습니다.
 *
 * @error 만약 사용자가 없으면 unauthorized 에러를 응답합니다.
 *
 * @need isAuth 미들웨어를 이 미들웨어 이전에 사용해야 합니다.
 */
const attachCurrentUser = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const connection = Container.get<Connection>('connection');
    const userRepository = connection.getCustomRepository(UserRepository);
    const user = await userRepository.findByLoginIdx(req.token.idx);
    if (!user) {
      return next(new ErrorResponse(commonError.unauthorized));
    }
    req.currentUser = user;
    return next();
  } catch (e) {
    return next(e);
  }
};

export default attachCurrentUser;
