import { Service, Inject } from 'typedi';
import ProductModel from '@/model/product';

@Service()
class ProductService {
  private productModel: ProductModel;

  constructor(@Inject('productModel') productModel: ProductModel) {
    this.productModel = productModel;
  }

  async getProducts(querys: {
    search?: string;
    category?: string;
    order?: string;
    offset?: string;
    limit?: string;
  }) {
    try {
      const products = await this.productModel.findProductsByFilter(
        querys.search,
        querys.category,
        querys.order,
        querys.limit,
        querys.offset,
      );
    } catch {}
  }
}

export default ProductService;
