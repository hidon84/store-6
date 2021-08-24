import { Router } from 'express';
import middlewares from '@/api/middlewares';
import { handleGetLikes, handleDeleteLike } from './likeController';

const likeRouter = Router();

export default (router: Router) => {
  router.use('/likes', likeRouter);

  likeRouter.get(
    '/',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleGetLikes,
  );

  likeRouter.delete(
    '/:id',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleDeleteLike,
  );
  return router;
};
