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

  router.get(
    '/me',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleGetCurrentUser,
  );

  router.put(
    '/me',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleUpdateCurrentUser,
  );

  router.delete(
    '/me',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleDeleteCurrentUser,
  );
};
