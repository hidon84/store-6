import { Service, Inject } from 'typedi';
import ProductModel from '@/model/product';
import ErrorResponse from '@/utils/errorResponse';
import { ProductError } from '@/constants/error';

@Service()
class ProductService {
  private productModel: ProductModel;

  constructor(@Inject('productModel') productModel: ProductModel) {
    this.productModel = productModel;
  }

  async getProducts(querys: object) {
    try {
      const products = await this.productModel.findProductsByFilter(querys);
      return products;
    } catch {
      throw new ErrorResponse(ProductError.unable);
    }
  }
}

export default ProductService;
