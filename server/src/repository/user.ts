import { EntityRepository, Repository } from 'typeorm';
import LoginEntity from '@/entity/login';
import UserEntity from '@/entity/user';

export interface UserInfo {
  email: string;
  phone: string;
  profile?: string;
}
export type EditableUserInfo = Partial<UserInfo>;

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> {
  async findByLoginIdx(idx: number) {
    const user = await this.findOne({ where: { login: { idx } } });
    return user;
  }

  async findIdxByLoginIdx(idx: number) {
    const user = await this.findOne({
      select: ['idx'],
      where: {
        login: { idx },
      },
    });
    return user?.idx;
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
    const userToSave = user;
    const loginToSave = login;
    return this.manager.transaction(async transactionManager => {
      const updatedLogin = await transactionManager.save(loginToSave);
      userToSave.login = updatedLogin;
      const updatedUser = await transactionManager.save(userToSave);

      return { updatedUser, updatedLogin };
    });
  }
}

export default UserRepository;
