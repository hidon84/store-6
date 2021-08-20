import { NextFunction, Request, Response } from 'express';
import { Container } from 'typeorm-typedi-extensions';
import * as oauthHelper from '@/helper/oauth';
import OAuthService from '@/service/oauth';
import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';

export const handleOauthGoogle = (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.redirect(oauthHelper.getOauthGoogleRedirectUrl());
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
    const { code } = req.query;

    if (!code) {
      throw new ErrorResponse(commonError.invalidQuery);
    }

    const oauthServiceInstance = Container.get(OAuthService);

    const accessToken = await oauthServiceInstance.getGoogleAccessToken(
      code as string,
    );
    const { id, email, picture } = await oauthServiceInstance.getGoogleUserInfo(
      accessToken,
    );

    res.json({ id, email, picture });
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
    res.redirect(oauthHelper.getOauthFacebookRedirectUrl());
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
    const { code } = req.query;

    if (!code) {
      throw new ErrorResponse(commonError.invalidQuery);
    }

    const oauthServiceInstance = Container.get(OAuthService);

    const accessToken = await oauthServiceInstance.getFacebookAccessToken(
      code as string,
    );
    const { id, email, picture } =
      await oauthServiceInstance.getFacebookUserInfo(accessToken);

    res.json({ id, email, picture });
  } catch (e) {
    next(e);
  }
};
