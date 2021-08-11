import { Service, Inject } from 'typedi';
import User from '@/entity/user';

@Service()
class AuthService {
  private userEntity: User;

  constructor(@Inject('userEntity') userEntity: User) {
    this.userEntity = userEntity;
  }

  async Signup() {
    const userNumber = new Date().getTime();
    this.userEntity.userId = `testId${userNumber}`;
    this.userEntity.save();
  }
}

export default AuthService;
