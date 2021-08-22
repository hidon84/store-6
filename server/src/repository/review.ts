import { EntityRepository, Repository } from 'typeorm';
import ReviewEntity from '@/entity/review';

@EntityRepository(ReviewEntity)
class ReviewRepository extends Repository<ReviewEntity> {
  async getCntByProductIdx(productIdx: number) {
    const reviewCnt = await this.count({
      where: {
        product: { idx: productIdx },
      },
    });
    return reviewCnt;
  }
}

export default ReviewRepository;
