import { Router } from 'express';
import handleLogin from './authController';

const authRouter = Router();

export default (router: Router) => {
  router.use('/auth', authRouter);

  authRouter.post('/login', handleLogin);

  return router;
};
