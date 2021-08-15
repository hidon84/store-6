import { JwtPayload } from 'jsonwebtoken';
import UserEntity from '@/entity/user';

/**
 * Request 타입에 token 등의 필드를 추가해서 req.token, req.currentUser와 같이
 * 사용하기 위한 타입 선언 부분입니다. token 필드는 express-jwt 패키지를 통해서 주입되며
 * currentUser는 attachCurrentUser 미들웨어에서 추가됩니다.
 */
declare global {
  namespace Express {
    interface Request {
      token: JwtPayload;
      currentUser: UserEntity;
    }
  }
}
