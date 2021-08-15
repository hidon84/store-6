import { EntityRepository, Repository } from 'typeorm';
import LoginEntity from '@/entity/login';

@EntityRepository(LoginEntity)
class LoginRepository extends Repository<LoginEntity> {
  async findById(id: string) {
    const account = await this.findOne({ where: { id } });
    return account;
  }

  async findByIdx(idx: number) {
    const account = await this.findOne({ where: { idx } });
    return account;
  }

  async removeByIdx(idx: number) {
    const login = await this.findByIdx(idx);
    if (login) {
      await this.remove(login);
    }
  }
}

export default LoginRepository;
