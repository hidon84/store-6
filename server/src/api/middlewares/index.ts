import errorHandler from './error';
import { isRefreshToken, isAccessToken } from './isJwtToken';
import isAuth from './isAuth';
import attachCurrentUser from './attachCurrentUser';

const middlewares = {
  isAuth,
  errorHandler,
  isRefreshToken,
  isAccessToken,
  attachCurrentUser,
};

export default middlewares;
