import { Router } from 'express';
import {
  handleOauthFacebook,
  handleOauthFacebookCallback,
  handleOauthFacebookLogin,
  handleOauthGoogle,
  handleOauthGoogleCallback,
  handleOauthGoogleLogin,
} from './oauthController';

const oauthRouter = Router();

export default (router: Router) => {
  router.use('/oauth', oauthRouter);

  oauthRouter.get('/google', handleOauthGoogle);
  oauthRouter.get('/google/login', handleOauthGoogleLogin);
  oauthRouter.get('/google/callback', handleOauthGoogleCallback);

  oauthRouter.get('/facebook', handleOauthFacebook);
  oauthRouter.get('/facebook/login', handleOauthFacebookLogin);
  oauthRouter.get('/facebook/callback', handleOauthFacebookCallback);

  return router;
};
