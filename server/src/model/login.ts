import LoginEntity from '@/entity/login';
import Model from './model';

class LoginModel extends Model<LoginEntity> {
  async findById(id: string) {
    const account = await this.repository.findOne({ where: { id } });
    return account;
  }

  async findByIdx(idx: number) {
    const account = await this.repository.findOne({ where: { idx } });
    return account;
  }
}

export default LoginModel;
