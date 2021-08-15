import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import { ProductError } from '@/constants/error';
import ProductRepository from '@/repository/product';

@Service()
class ProductService {
  private productRepository: ProductRepository;

  constructor(
    @InjectRepository(ProductRepository) productRepository: ProductRepository,
  ) {
    this.productRepository = productRepository;
  }

  async getProducts(querys: object) {
    try {
      const products = await this.productRepository.findProductsByFilter(
        querys,
      );
      return products;
    } catch {
      throw new ErrorResponse(ProductError.unable);
    }
  }
}

export default ProductService;
