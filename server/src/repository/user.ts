import { EntityRepository, Repository } from 'typeorm';
import LoginEntity from '@/entity/login';
import UserEntity from '@/entity/user';

export interface EditableUserInfo {
  email?: string;
  phone?: string;
  profile?: string;
}

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  async findByLoginIdx(idx: number) {
    const user = await this.findOne({ where: { login: { idx } } });
    return user;
  }

  async findByLoginIdxWithLogin(idx: number) {
    const user = await this.findOne({
      relations: ['login'],
      where: { login: { idx } },
    });
    return user;
  }

  async findByIdx(idx: number) {
    const user = await this.findOne({ where: { idx } });
    return user;
  }

  async findByIdxWithLogin(idx: number) {
    const user = await this.findOne({ relations: ['login'], where: { idx } });
    return user;
  }

  async removeByIdx(idx: number) {
    const user = await this.findByIdx(idx);
    if (user) {
      await this.remove(user);
    }
  }

  async transactionSaveWithLogin(user: UserEntity, login: LoginEntity) {
    return this.manager.transaction(async transactionManager => {
      const updatedUser = await transactionManager.save(user);
      const updatedLogin = await transactionManager.save(login);
      return { updatedUser, updatedLogin };
    });
  }
}

export default UserRepository;
