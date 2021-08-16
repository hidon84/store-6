import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import UsersService from '@/service/users';

export const handleGetCurrentUser = async (req: Request, res: Response) => {
  return res.json(req.currentUser);
};

export const handleUpdateCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = req.body;

    const userServiceInstance = Container.get(UsersService);

    const { idx, createdAt, updatedAt } = await userServiceInstance.updateUser(
      req.currentUser.idx,
      user,
    );

    return res.json({ idx, createdAt, updatedAt });
  } catch (e) {
    return next(e);
  }
};

export const handleDeleteCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userServiceInstance = Container.get(UsersService);

    await userServiceInstance.deleteUser(req.currentUser.idx);

    return res.end();
  } catch (e) {
    return next(e);
  }
};
