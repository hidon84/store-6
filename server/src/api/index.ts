import { Router } from 'express';
import version from './routes/version';
import auth from './routes/auth';
import oauth from './routes/oauth';
import product from './routes/product';
import users from './routes/users';

export default () => {
  const router = Router();

  version(router);
  auth(router);
  oauth(router);
  product(router);
  users(router);

  return router;
};
