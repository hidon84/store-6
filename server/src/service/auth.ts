import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import * as hashHelper from '@/helper/hash';
import * as jwtHelper from '@/helper/jwt';
import * as authHelper from '@/helper/auth';
import ErrorResponse from '@/utils/errorResponse';
import { commonError, loginError, logoutError } from '@/constants/error';
import LoginRepository from '@/repository/login';

@Service()
class AuthService {
  private loginRepository: LoginRepository;

  constructor(
    @InjectRepository(LoginRepository) loginRepository: LoginRepository,
  ) {
    this.loginRepository = loginRepository;
  }

  async Login(id: string, password: string) {
    try {
      const login = await this.loginRepository.findById(id);

      if (!login) {
        throw new ErrorResponse(commonError.unauthorized);
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
      if (e?.isOperational) {
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
      const login = await this.loginRepository.findByIdx(idx);
      const isValid = await authHelper.verifyRefreshToken(refreshToken, idx);
      if (isValid && login) {
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
