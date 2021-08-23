import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import ErrorResponse from '@/utils/errorResponse';
import LikeService from '@/service/like';
import { commonError } from '@/constants/error';

export const handleGetLikes = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const likeServiceInstance = Container.get(LikeService);
    const { currentUser } = req;
    const likes = await likeServiceInstance.getLikes(currentUser.idx);
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
    const likeIdx = Number(req.params.id);
    if (Number.isNaN(likeIdx) || likeIdx <= 0) {
      throw new ErrorResponse(commonError.invalidPathParams);
    }
    const { currentUser } = req;

    const likeServiceInstance = Container.get(LikeService);
    const likes = await likeServiceInstance.deleteLike(
      currentUser.idx,
      likeIdx,
    );
    return res.json(likes);
  } catch (e) {
    return next(e);
  }
};
