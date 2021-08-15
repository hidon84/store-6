import { Like, FindOperator, FindManyOptions } from 'typeorm';
import ProductEntity from '@/entity/product';
import Model from './model';

class ProductModel extends Model<ProductEntity> {
  async findProductsByFilter(
    search?: string,
    category?: string,
    order?: string,
    limit?: string,
    offset?: string,
  ) {
    const subWhere: {
      title?: FindOperator<string>;
      category?: {
        idx: string;
      };
    } = {};

    const subOrder: {
      price?: any;
      createdAt?: any;
    } = {};

    if (search) {
      subWhere.title = Like(`%${search}%`);
    }

    if (category) {
      subWhere.category = { idx: category };
    }

    if (order) {
      if (order === 'price-low') {
        subOrder.price = 'ASC';
      }

      if (order === 'price-high') {
        subOrder.price = 'DESC';
      }

      if (order === 'recent') {
        subOrder.createdAt = 'DESC';
      }
    }

    const products = await this.repository.find({
      where: subWhere,
      relations: ['category'],
      order: subOrder,
      skip: 0,
      take: 50,
    });
    return products;
  }
}

export default ProductModel;
