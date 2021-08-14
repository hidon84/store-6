import LoginEntity from '@/entity/login';
import Model from './model';

class LoginModel extends Model<LoginEntity> {
  async getPassword(id: string) {
    const [hash] = await this.repository.find({
      select: ['password'],
      where: { id },
    });
    return hash.password;
  }
}

export default LoginModel;
