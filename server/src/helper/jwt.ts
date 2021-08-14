import jwt, { SignOptions, Algorithm } from 'jsonwebtoken';
import config from '@/config';

export enum Token {
  Access = 'ACCESSS_TOKEN',
  Refresh = 'REFRESH_TOKEN',
}

export interface TokenContent {
  idx: number;
  id?: string;
}

const createTokenGenerator = (subject: string, expiresIn: number) => {
  const algorithm = config.jwt.algorithm as Algorithm;
  const jwtOption: SignOptions = { algorithm, expiresIn, subject };

  if (subject === Token.Access) {
    return ({ idx, id }: TokenContent) =>
      jwt.sign({ idx, id }, config.jwt.secret, jwtOption);
  }
  if (subject === Token.Refresh) {
    return ({ idx }: TokenContent) =>
      jwt.sign({ idx }, config.jwt.secret, jwtOption);
  }
  return () => jwt.sign({}, config.jwt.secret, jwtOption);
};

export const generateAccessToken = createTokenGenerator(
  Token.Access,
  config.jwt.expire.access,
);

export const generateRefreshToken = createTokenGenerator(
  Token.Refresh,
  config.jwt.expire.refresh,
);

const decodeToken = (subject: string) => (tokenType: Token) => {
  const algorithm = config.jwt.algorithm as Algorithm;
  const decode = jwt.verify(tokenType, config.jwt.secret, {
    algorithms: [algorithm],
    subject,
  });
  return decode;
};

export const decodeAccessToken = decodeToken(Token.Access);
export const decodeRefreshToken = decodeToken(Token.Refresh);
