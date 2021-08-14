import { Router } from 'express';
import handleGetVersion from './versionController';

const versionRouter = Router();

export default (router: Router) => {
  router.use('/version', versionRouter);

  versionRouter.get('/', handleGetVersion);

  return router;
};
