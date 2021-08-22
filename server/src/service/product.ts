import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
  commonError,
  ProductDetailError,
  ProductError,
} from '@/constants/error';
import ProductRepository from '@/repository/product';
import ViewRepository from '@/repository/view';
import ReviewRepository from '@/repository/review';
import LikeRepository from '@/repository/like';
import CartRepository from '@/repository/cart';
import ProductImageRepository from '@/repository/productImage';

@Service()
class ProductService {
  private productRepository: ProductRepository;

  private productImageRepository: ProductImageRepository;

  private viewRepository: ViewRepository;

  private reviewRepository: ReviewRepository;

  private likeRepository: LikeRepository;

  private cartRepository: CartRepository;

  constructor(
    @InjectRepository(ProductRepository) productRepository: ProductRepository,
    @InjectRepository(ProductImageRepository)
    productImageRepository: ProductImageRepository,
    @InjectRepository(ViewRepository) viewRepository: ViewRepository,
    @InjectRepository(ReviewRepository) reviewRepository: ReviewRepository,
    @InjectRepository(LikeRepository) likeRepository: LikeRepository,
    @InjectRepository(CartRepository) cartRepository: CartRepository,
  ) {
    this.productRepository = productRepository;
    this.productImageRepository = productImageRepository;
    this.viewRepository = viewRepository;
    this.reviewRepository = reviewRepository;
    this.likeRepository = likeRepository;
    this.cartRepository = cartRepository;
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

  async getProductDetail(productIdx: number, userIdx?: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);

      if (!product) {
        throw new ErrorResponse(commonError.notFound);
      }

      const productImages =
        await this.productImageRepository.findUrlsByProductIdx(productIdx);
      const viewCnt = await this.viewRepository.getCntByProductIdx(productIdx);
      const reviewCnt = await this.reviewRepository.getCntByProductIdx(
        productIdx,
      );
      const likeCnt = await this.likeRepository.getCntByProductIdx(productIdx);

      const result = {
        ...product,
        images: productImages,
        viewCnt,
        reviewCnt,
        likeCnt,
        isLike: false,
        isCart: false,
      };

      if (!userIdx) {
        return result;
      }

      const like = await this.likeRepository.findByIdxOfProductAndUser(
        userIdx,
        productIdx,
      );
      if (like) {
        result.isLike = true;
      }

      const cartItem = await this.cartRepository.findByIdxOfProductAndUser(
        userIdx,
        productIdx,
      );
      if (cartItem) {
        result.isCart = true;
      }

      return result;
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(ProductDetailError.unable);
    }
  }
}

export default ProductService;
