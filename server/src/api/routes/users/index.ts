import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {
  handleDeleteCurrentUser,
  handleGetCurrentUser,
  handleUpdateCurrentUser,
} from './usersController';

const usersRouter = Router();

export default (router: Router) => {
  router.use('/users', usersRouter);

  usersRouter.get(
    '/me',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleGetCurrentUser,
  );

  usersRouter.put(
    '/me',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    middlewares.uploadImage,
    handleUpdateCurrentUser,
  );

  usersRouter.delete(
    '/me',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleDeleteCurrentUser,
  );
};
