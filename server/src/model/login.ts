import LoginEntity from '@/entity/login';
import Model from './model';

class LoginModel extends Model<LoginEntity> {
  async findById(id: string) {
    const account = await this.repository.find({ where: { id } });
    return account[0];
  }
}

export default LoginModel;
