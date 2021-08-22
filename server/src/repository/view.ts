import { EntityRepository, Repository } from 'typeorm';
import ViewEntity from '@/entity/view';

@EntityRepository(ViewEntity)
class ViewRepository extends Repository<ViewEntity> {
  async getCntByProductIdx(productIdx: number) {
    const viewCnt = await this.count({
      where: {
        product: { idx: productIdx },
      },
    });
    return viewCnt;
  }
}

export default ViewRepository;
