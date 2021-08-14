import UserEntity from '@/entity/user';
import Model from './model';

class UserModel extends Model<UserEntity> {
  async findUserByLoginIdx(idx: number) {
    const users = await this.repository.find({ where: { idx } });
    return users[0];
  }
}

export default UserModel;
