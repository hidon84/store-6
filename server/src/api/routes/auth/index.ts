import { Router } from 'express';
import { handleLogin, handleRefresh } from './authController';

const authRouter = Router();

export default (router: Router) => {
  router.use('/auth', authRouter);

  authRouter.post('/login', handleLogin);
  authRouter.get('/refresh', handleRefresh);

  return router;
};
