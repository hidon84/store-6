import { Router } from 'express';
import {
  handleOauthGoogle,
  handleOauthGoogleCallback,
} from './oauthController';

const oauthRouter = Router();

export default (router: Router) => {
  router.use('/oauth', oauthRouter);

  oauthRouter.get('/google', handleOauthGoogle);
  oauthRouter.get('/google/callback', handleOauthGoogleCallback);

  return router;
};
