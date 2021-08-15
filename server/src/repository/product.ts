import { EntityRepository, Repository, Like, FindOperator } from 'typeorm';
import ProductEntity from '@/entity/product';

@EntityRepository(ProductEntity)
class ProductRepository extends Repository<ProductEntity> {
  async findProductsByFilter(querys: {
    search?: string;
    category?: string;
    order?: string;
    limit?: string;
    offset?: string;
  }) {
    const subWhere: {
      title?: FindOperator<string>;
      category?: {
        idx: string;
      };
    } = {};

    const subOrder: {
      price?: 'ASC' | 'DESC';
      createdAt?: 'ASC' | 'DESC';
    } = {};

    const subOffset: number = querys.offset ? Number(querys.offset) : 0;

    const subLimit: number = querys.limit ? Number(querys.limit) : 50;

    if (querys.search) {
      subWhere.title = Like(`%${querys.search}%`);
    }

    if (querys.category) {
      subWhere.category = { idx: querys.category };
    }

    if (querys.order) {
      if (querys.order === 'price-low') {
        subOrder.price = 'ASC';
      }

      if (querys.order === 'price-high') {
        subOrder.price = 'DESC';
      }

      if (querys.order === 'recent') {
        subOrder.createdAt = 'DESC';
      }
    }

    const products = await this.find({
      select: ['idx', 'thumbnail', 'title', 'price', 'createdAt', 'updatedAt'],
      where: subWhere,
      order: subOrder,
      skip: subOffset,
      take: subLimit,
    });

    return products;
  }
}

export default ProductRepository;
