import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import * as jwtHelper from '@/helper/jwt';
import AuthService from '@/service/auth';

const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id, password } = req.body;

    const authServiceInstance = Container.get(AuthService);
    const { access, refresh } = await authServiceInstance.Login(id, password);

    res.cookie('X-Refresh-Token', refresh, {
      expires: new Date(Date.now() + jwtHelper.getRefreshExpiresInMs()),
      secure: false,
      httpOnly: true,
    });

    return res.status(200).json({ access });
  } catch (e) {
    return next(e);
  }
};

export default handleLogin;
