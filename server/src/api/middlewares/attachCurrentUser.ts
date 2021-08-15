import { NextFunction, Request, Response } from 'express';
import { Container } from 'typeorm-typedi-extensions';
import { commonError } from '@/constants/error';
import UserRepository from '@/repository/user';
import ErrorResponse from '@/utils/errorResponse';

const attachCurrentUser = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const userRepository = Container.get<UserRepository>(UserRepository);
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
