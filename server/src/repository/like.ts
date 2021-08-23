import { EntityRepository, Repository } from 'typeorm';
import LikeEntity from '@/entity/like';

@EntityRepository(LikeEntity)
class LikeRepository extends Repository<LikeEntity> {
  async findByIdxOfProductAndUser(userIdx: number, productIdx: number) {
    const like = await this.findOne({
      where: {
        user: { idx: userIdx },
        product: { idx: productIdx },
      },
    });
    return like;
  }

  async getCntByProductIdx(productIdx: number) {
    const likeCnt = await this.count({
      where: {
        product: { idx: productIdx },
      },
    });
    return likeCnt;
  }

  async findByIdxOfUser(userIdx: number) { 
    console.log('도착~~~~~~');
  }
}

export default LikeRepository;
