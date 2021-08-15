import { NextFunction, Request, Response } from 'express';
import { Connection } from 'typeorm';
import Container from 'typedi';
import { commonError } from '@/constants/error';
import UserRepository from '@/repository/user';
import ErrorResponse from '@/utils/errorResponse';

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
