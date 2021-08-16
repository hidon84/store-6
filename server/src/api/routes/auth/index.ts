import { Router } from 'express';
import { handleLogin, handleLogout, handleRefresh } from './authController';

const authRouter = Router();

export default (router: Router) => {
  router.use('/auth', authRouter);

  authRouter.post('/login', handleLogin);
  authRouter.get('/refresh', handleRefresh);
  authRouter.get('/logout', handleLogout);

  return router;
};
