import { Service, Inject } from 'typedi';
import LoginModel from '@/model/login';
import * as hashHelper from '@/helper/hash';
import * as jwtHelper from '@/helper/jwt';
import * as authHelper from '@/helper/auth';
import UserModel from '@/model/user';
import ErrorResponse from '@/utils/errorResponse';
import { loginError } from '@/constants/error';

@Service()
class AuthService {
  private loginModel: LoginModel;

  private userModel: UserModel;

  constructor(
    @Inject('loginModel') loginModel: LoginModel,
    @Inject('userModel') userModel: UserModel,
  ) {
    this.loginModel = loginModel;
    this.userModel = userModel;
  }

  async Login(id: string, password: string) {
    try {
      const login = await this.loginModel.findById(id);

      if (!login) {
        throw new ErrorResponse(loginError.notFound);
      }

      const user = await this.userModel.findUserByLoginIdx(login.idx);
      const isValid = hashHelper.comparePassword(login.password, password);

      if (isValid) {
        const access = jwtHelper.generateAccessToken(user);
        const refresh = jwtHelper.generateRefreshToken(user);

        await authHelper.storeRefreshToken(refresh, login.idx);

        return { access, refresh };
      }
      return {};
    } catch (e) {
      if (e instanceof ErrorResponse) {
        throw e;
      }
      throw new ErrorResponse(loginError.unable);
    }
  }
}

export default AuthService;
