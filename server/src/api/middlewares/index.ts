import errorHandler from './error';
import { isRefreshToken, isAccessToken } from './isJwtToken';
import uploadImage from './upload';
import isAuth from './isAuth';
import attachCurrentUser from './attachCurrentUser';

const middlewares = {
  isAuth,
  errorHandler,
  isRefreshToken,
  isAccessToken,
  attachCurrentUser,
  uploadImage,
};

export default middlewares;
