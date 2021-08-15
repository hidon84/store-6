import { Service, Inject } from 'typedi';
import ProductModel from '@/model/product';
import * as hashHelper from '@/helper/hash';
import * as jwtHelper from '@/helper/jwt';
import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';

@Service()
class ProductService {
  private productModel: ProductModel;

  constructor(@Inject('productModel') productModel: ProductModel) {
    this.productModel = productModel;
  }

  async getProducts(search: string, category: number) {
    try {
      console.log(search, category);
      const test = await this.productModel.findProducts(search, category);
      console.log(test);
    } catch {}
  }
}

export default ProductService;
