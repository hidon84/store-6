import jwt, { SignOptions, Algorithm, JwtPayload } from 'jsonwebtoken';
import config from '@/config';

export enum Token {
  Access = 'ACCESSS_TOKEN',
  Refresh = 'REFRESH_TOKEN',
}

export interface AccessJwtPayload extends JwtPayload {
  idx: number;
  id: string;
}

export interface RefreshJwtPayload extends JwtPayload {
  idx: number;
}

const createTokenGenerator = (subject: string, expiresIn: number) => {
  const algorithm = config.jwt.algorithm as Algorithm;
  const jwtOption: SignOptions = { algorithm, expiresIn, subject };

  if (subject === Token.Access) {
    return ({ idx, id }: AccessJwtPayload) =>
      jwt.sign({ idx, id }, config.jwt.secret, jwtOption);
  }
  if (subject === Token.Refresh) {
    return ({ idx }: RefreshJwtPayload) =>
      jwt.sign({ idx }, config.jwt.secret, jwtOption);
  }
  return () => jwt.sign({}, config.jwt.secret, jwtOption);
};

export const generateAccessToken = createTokenGenerator(
  Token.Access,
  config.jwt.expire.access * 3600,
);

export const generateRefreshToken = createTokenGenerator(
  Token.Refresh,
  config.jwt.expire.refresh * 3600,
);

const decodeToken = (subject: Token, token: string) => {
  const algorithm = config.jwt.algorithm as Algorithm;
  const decode = jwt.verify(token, config.jwt.secret, {
    algorithms: [algorithm],
    subject,
  });

  return decode;
};

export const decodeAccessToken = (token: string) => {
  return decodeToken(Token.Access, token) as AccessJwtPayload;
};
export const decodeRefreshToken = (token: string) => {
  return decodeToken(Token.Refresh, token) as RefreshJwtPayload;
};

export const getRefreshExpiresInMs = () => {
  const expireMs = 1000 * 60 * 60 * config.jwt.expire.refresh;
  return expireMs;
};
