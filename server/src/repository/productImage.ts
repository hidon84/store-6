import { EntityRepository, Repository } from 'typeorm';
import ProductImageEntity from '@/entity/productImage';

@EntityRepository(ProductImageEntity)
class ProductImageRepository extends Repository<ProductImageEntity> {
  async findUrlsByProductIdx(productIdx: number) {
    const imageUrls = await this.find({
      select: ['url'],
      where: {
        product: { idx: productIdx },
      },
    });
    return imageUrls.map(v => v.url);
  }
}

export default ProductImageRepository;
