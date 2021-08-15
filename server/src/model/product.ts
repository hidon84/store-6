import ProductEntity from '@/entity/product';
import Model from './model';

class ProductModel extends Model<ProductEntity> {
  async findProducts(search: string, category: number) {
    return '여기까지 왔다.';
  }
}

export default ProductModel;
