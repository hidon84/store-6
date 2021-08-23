import { EntityRepository, Repository } from 'typeorm';
import ViewEntity from '@/entity/view';
import UserEntity from '@/entity/user';
import ProductEntity from '@/entity/product';

@EntityRepository(ViewEntity)
class ViewRepository extends Repository<ViewEntity> {
  async addView(user: UserEntity, product: ProductEntity) {
    const view = new ViewEntity();
    view.user = user;
    view.product = product;

    const savedView = await this.save(view);
    return savedView;
  }

  async findByIdxOfProductAndUser(productIdx: number, userIdx: number) {
    const view = await this.findOne({
      where: {
        product: { idx: productIdx },
        user: { idx: userIdx },
      },
    });
    return view;
  }

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
