import { EntityRepository, Repository } from 'typeorm';
import ProductImageEntity from '@/entity/productImage';
import ProductEntity from '@/entity/product';

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

  async saveItem(product: ProductEntity, url: string) {
    const productImage = new ProductImageEntity();
    productImage.product = product;
    productImage.url = url;

    await this.save(productImage);
  }
}

export default ProductImageRepository;
