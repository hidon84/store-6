import { EntityRepository, Repository } from 'typeorm';
import ProductEntity from '@/entity/product';
import UserEntity from '@/entity/user';
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
    const likes = await this.find({
      where: {
        user: userIdx,
      },
      relations: ['product'],
    });

    return likes;
  }

  async findByIdx(likeIdx: number) {
    const likes = await this.findOne({
      where: {
        idx: likeIdx,
      },
      relations: ['user'],
    });
    return likes;
  }

  async deleteItem(item: LikeEntity) {
    await this.remove(item);
  }

  async addItem(user: UserEntity, product: ProductEntity) {
    const like = new LikeEntity();
    like.user = user;
    like.product = product;

    const savedView = await this.save(like);
    return savedView;
  }

  async findByProductAndUser(product: ProductEntity, user: UserEntity) {
    const like = await this.findOne({
      where: {
        user,
        product,
      },
    });

    return like;
  }
}

export default LikeRepository;
