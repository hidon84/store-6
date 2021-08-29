import { EntityRepository, Repository, getManager } from 'typeorm';
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

  async findTopViewedCategoryByUser(userIdx: number) {
    const views = getManager().query(`
      select c.idx, count(c.idx) as cnt
      from view v
      left join product p on p.idx = v.product_idx
      left join category c on category_idx = c.idx
      where user_idx=${userIdx}
      group by c.idx
      order by cnt desc
      limit 1;
    `);

    return views;
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
