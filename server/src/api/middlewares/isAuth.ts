import jwt from 'express-jwt';
import { Request } from 'express';
import config from '@/config';

/**
 * Header의 authorizatioin 필드에서 Token을 파싱해 반환합니다.
 *
 * @param req Express Request 객체
 *
 * @returns Header에서 파싱한 Token 문자열. 만약 없을 경우 null 반환
 */
const getTokenFromHeader = (req: Request) => {
  const { authorization } = req.headers;
  if (
    authorization &&
    (authorization.startsWith('Bearer') || authorization.startsWith('Token'))
  ) {
    return authorization.split(' ')[1];
  }
  return null;
};

/**
 * express-jwt 패키지를 사용한 토큰 검증 미들웨어입니다.
 *
 * 토큰을 파싱해서 req.token에 토큰 디코딩된 객체를 넣습니다.
 *
 * 이 미들웨어를 통과하게 되면 토큰이 있다는 것이 검증된 것이므로
 * isAuth라는 네이밍을 사용했습니다.
 *
 * @error 만약 토큰이 없으면 Unauthorized 에러를 응답합니다.
 */
const isAuth = jwt({
  secret: config.jwt.secret,
  algorithms: [config.jwt.algorithm],
  userProperty: 'token',
  getToken: getTokenFromHeader,
});

export default isAuth;
