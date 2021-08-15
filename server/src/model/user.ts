import UserEntity from '@/entity/user';
import Model from './model';

class UserModel extends Model<UserEntity> {
  async findUserByLoginIdx(idx: number) {
    const user = await this.repository.findOne({ where: { idx } });
    return user;
  }
}

export default UserModel;
