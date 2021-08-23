import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import LikeService from '@/service/like';

export const handleGetLikes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const likeServiceInstance = Container.get(LikeService);
    const { currentUser } = req;
    const likes = await likeServiceInstance.getLikes(
      currentUser.idx,
    );
    return res.json(likes);
  } catch (e) {
    return next(e);
  }
};

export const handleDeleteLike = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const likeServiceInstance = Container.get(LikeService);
      const { currentUser } = req;
      const likes = await likeServiceInstance.getLikes(
        currentUser.idx,
      );
      return res.json(likes);
    } catch (e) {
      return next(e);
    }
  };
