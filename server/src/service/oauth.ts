import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import * as oauthHelper from '@/helper/oauth';
import * as jwtHelper from '@/helper/jwt';
import * as authHelper from '@/helper/auth';
import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';
import LoginRepository from '@/repository/login';
import { LoginType } from '@/entity/login';

@Service()
class OAuthService {
  private loginRepository: LoginRepository;

  constructor(
    @InjectRepository(LoginRepository) loginRepository: LoginRepository,
  ) {
    this.loginRepository = loginRepository;
  }

  async oauthLogin(id: string, type: LoginType.Google | LoginType.Facebook) {
    try {
      const login = await this.loginRepository.findById(id, type);

      if (!login) {
        throw new ErrorResponse(commonError.unauthorized);
      }

      const access = jwtHelper.generateAccessToken(login);
      const refresh = jwtHelper.generateRefreshToken(login);

      await authHelper.storeRefreshToken(refresh, login.idx);

      return { access, refresh };
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  async getGoogleAccessToken(code: string) {
    try {
      const response = await oauthHelper.getGoogleOauthToken(code);
      return response.access_token;
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  async getGoogleUserInfo(accessToken: string) {
    try {
      const response = await oauthHelper.getGoogleUserInfo(accessToken);
      const { id, email, picture } = response;

      const alreadyCreatedLogin = await this.loginRepository.findById(
        id,
        LoginType.Google,
      );

      return {
        id,
        email,
        picture,
        isRegistered: alreadyCreatedLogin?.id === id,
      };
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  googleLogin(id: string) {
    return this.oauthLogin(id, LoginType.Google);
  }

  async getFacebookAccessToken(code: string) {
    try {
      const response = await oauthHelper.getFacebookOauthToken(code);
      return response.access_token;
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  async getFacebookUserInfo(accessToken: string) {
    try {
      const response = await oauthHelper.getFacebookUserInfo(accessToken);
      const { id, email, picture } = response;
      const alreadyCreatedLogin = await this.loginRepository.findById(
        id,
        LoginType.Facebook,
      );

      return {
        id,
        email,
        picture,
        isRegistered: alreadyCreatedLogin?.id === id,
      };
    } catch (e) {
      throw new ErrorResponse(commonError.unauthorized);
    }
  }

  facebookLogin(id: string) {
    return this.oauthLogin(id, LoginType.Facebook);
  }
}

export default OAuthService;
