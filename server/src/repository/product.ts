import { EntityRepository, Repository, Like, FindOperator } from 'typeorm';
import ProductEntity from '@/entity/product';
import CategoryEntity from '@/entity/category';

@EntityRepository(ProductEntity)
class ProductRepository extends Repository<ProductEntity> {
  async findByIdx(idx: number) {
    const product = await this.findOne({ where: { idx } });
    return product;
  }

  async findProductsByFilter(querys: {
    search?: string;
    category?: string;
    order?: string;
    limit?: string;
    page?: string;
  }) {
    const subWhere: {
      title?: FindOperator<string>;
      category?: {
        idx: string;
      };
    } = {};

    const subOrder: {
      discountedPrice?: 'ASC' | 'DESC';
      createdAt?: 'ASC' | 'DESC';
    } = {};

    const subLimit: number = querys.limit ? Number(querys.limit) : 20;

    const subOffset: number = querys.page
      ? (Number(querys.page) - 1) * subLimit
      : 0;

    if (querys.search) {
      subWhere.title = Like(`%${querys.search}%`);
    }

    if (querys.category) {
      subWhere.category = { idx: querys.category };
    }

    if (querys.order) {
      if (querys.order === 'price-low') {
        subOrder.discountedPrice = 'ASC';
      }

      if (querys.order === 'price-high') {
        subOrder.discountedPrice = 'DESC';
      }

      if (querys.order === 'recent') {
        subOrder.createdAt = 'DESC';
      }
    }

    const products = await this.find({
      select: [
        'idx',
        'thumbnail',
        'title',
        'discountedPrice',
        'originPrice',
        'createdAt',
        'updatedAt',
      ],
      where: subWhere,
      order: subOrder,
      skip: subOffset,
      take: subLimit,
    });

    return products;
  }

  async saveItem(
    policy: string,
    currentCategory: CategoryEntity,
    title: string,
    thumbnail: string,
    originPrice: number,
    discountedPrice: number,
    rank: number,
    mandatoryInfo: { key: string; value: string },
    shipInfo: { key: string; value: string },
  ) {
    const product = new ProductEntity();
    product.policy = policy;
    product.category = currentCategory;
    product.title = title;
    product.thumbnail = thumbnail;
    product.originPrice = originPrice;
    product.discountedPrice = discountedPrice;
    product.rank = rank;
    product.mandatoryInfo = mandatoryInfo;
    product.shipInfo = shipInfo;

    const newProduct = await this.save(product);
    return newProduct;
  }
}

export default ProductRepository;
