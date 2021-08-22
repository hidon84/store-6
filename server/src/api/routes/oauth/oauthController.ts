import { NextFunction, Request, Response } from 'express';
import { Container } from 'typeorm-typedi-extensions';
import * as oauthHelper from '@/helper/oauth';
import * as jwtHelper from '@/helper/jwt';
import OAuthService from '@/service/oauth';
import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';

export const handleOauthGoogle = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const csrfToken = Math.random().toString(36).substring(7);
    res.cookie('X-CSRF-Token', csrfToken, { maxAge: 60000 });

    res.redirect(oauthHelper.getOauthGoogleRedirectUrl(false, csrfToken));
  } catch (e) {
    next(e);
  }
};

export const handleOauthGoogleLogin = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const csrfToken = Math.random().toString(36).substring(7);
    res.cookie('X-CSRF-Token', csrfToken, { maxAge: 60000 });

    res.redirect(oauthHelper.getOauthGoogleRedirectUrl(true, csrfToken));
  } catch (e) {
    next(e);
  }
};

export const handleOauthGoogleCallback = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { code, state } = req.query;
    const csrfToken = req.cookies['X-CSRF-Token'];
    const decodedState = oauthHelper.oauthStateDecoder(state as string);

    if (csrfToken !== decodedState.csrf_token) {
      throw new ErrorResponse(commonError.invalidState);
    }

    if (!code) {
      throw new ErrorResponse(commonError.invalidQuery);
    }

    const oauthServiceInstance = Container.get(OAuthService);

    const oauthAccessToken = await oauthServiceInstance.getGoogleAccessToken(
      code as string,
    );
    const { id, email, picture } = await oauthServiceInstance.getGoogleUserInfo(
      oauthAccessToken,
    );

    if (decodedState?.is_login_request !== 'true') {
      res.json({ id, email, picture });
      return;
    }

    const { access, refresh } = await oauthServiceInstance.googleLogin(id);

    res.cookie('X-Refresh-Token', refresh, {
      expires: new Date(Date.now() + jwtHelper.getRefreshExpiresInMs()),
      secure: false,
      httpOnly: true,
    });

    res.status(200).json({ access });
  } catch (e) {
    next(e);
  }
};

export const handleOauthFacebook = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const csrfToken = Math.random().toString(36).substring(7);
    res.cookie('X-CSRF-Token', csrfToken, { maxAge: 60000 });

    res.redirect(oauthHelper.getOauthFacebookRedirectUrl(false, csrfToken));
  } catch (e) {
    next(e);
  }
};

export const handleOauthFacebookLogin = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const csrfToken = Math.random().toString(36).substring(7);
    res.cookie('X-CSRF-Token', csrfToken, { maxAge: 60000 });

    res.redirect(oauthHelper.getOauthFacebookRedirectUrl(true, csrfToken));
  } catch (e) {
    next(e);
  }
};

export const handleOauthFacebookCallback = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { code, state } = req.query;
    const csrfToken = req.cookies['X-CSRF-Token'];
    const decodedState = oauthHelper.oauthStateDecoder(state as string);

    if (csrfToken !== decodedState.csrf_token) {
      throw new ErrorResponse(commonError.invalidState);
    }

    if (!code) {
      throw new ErrorResponse(commonError.invalidQuery);
    }

    const oauthServiceInstance = Container.get(OAuthService);

    const oauthAccessToken = await oauthServiceInstance.getFacebookAccessToken(
      code as string,
    );
    const { id, email, picture } =
      await oauthServiceInstance.getFacebookUserInfo(oauthAccessToken);

    if (decodedState?.is_login_request !== 'true') {
      res.json({ id, email, picture });
      return;
    }

    const { access, refresh } = await oauthServiceInstance.googleLogin(id);

    res.cookie('X-Refresh-Token', refresh, {
      expires: new Date(Date.now() + jwtHelper.getRefreshExpiresInMs()),
      secure: false,
      httpOnly: true,
    });

    res.status(200).json({ access });
  } catch (e) {
    next(e);
  }
};
