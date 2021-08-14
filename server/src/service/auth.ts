import { Service, Inject } from 'typedi';
import LoginModel from '@/model/login';
import * as hashHelper from '@/helper/hash';
import * as jwtHelper from '@/helper/jwt';
import * as authHelper from '@/helper/auth';
import ErrorResponse from '@/utils/errorResponse';
import { commonError, loginError, logoutError } from '@/constants/error';

@Service()
class AuthService {
  private loginModel: LoginModel;

  constructor(@Inject('loginModel') loginModel: LoginModel) {
    this.loginModel = loginModel;
  }

  async Login(id: string, password: string) {
    try {
      const login = await this.loginModel.findById(id);

      if (!login) {
        throw new ErrorResponse(loginError.notFound);
      }

      const isValid = hashHelper.comparePassword(login.password, password);

      if (isValid) {
        const access = jwtHelper.generateAccessToken(login);
        const refresh = jwtHelper.generateRefreshToken(login);

        await authHelper.storeRefreshToken(refresh, login.idx);

        return { access, refresh };
      }

      throw new ErrorResponse(commonError.unauthorized);
    } catch (e) {
      if (e instanceof ErrorResponse) {
        throw e;
      }
      throw new ErrorResponse(loginError.unable);
    }
  }

  async Logout(token: string) {
    try {
      await authHelper.deleteRefreshToken(token);
    } catch {
      throw new ErrorResponse(logoutError.unable);
    }
  }

  async RefreshAccessToken(refreshToken: string) {
    try {
      const { idx } = jwtHelper.decodeRefreshToken(refreshToken);
      const login = await this.loginModel.findByIdx(idx);
      const isValid =
        login && (await authHelper.verifyRefreshToken(refreshToken, idx));

      if (isValid) {
        const access = jwtHelper.generateAccessToken(login);
        return { access };
      }

      throw new ErrorResponse(commonError.unauthorized);
    } catch (e) {
      if (e instanceof ErrorResponse) {
        throw e;
      }
      throw new ErrorResponse(loginError.unable);
    }
  }
}

export default AuthService;
