import { Router } from 'express';
import version from './routes/version';
import auth from './routes/auth';

export default () => {
  const router = Router();

  version(router);
  auth(router);

  return router;
};
