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
import UserRepository from '@/repository/user';

@Service()
class ProductService {
  private userRepository: UserRepository;

  private productRepository: ProductRepository;

  private productImageRepository: ProductImageRepository;

  private viewRepository: ViewRepository;

  private reviewRepository: ReviewRepository;

  private likeRepository: LikeRepository;

  private cartRepository: CartRepository;

  constructor(
    @InjectRepository(UserRepository) userRepository: UserRepository,
    @InjectRepository(ProductRepository) productRepository: ProductRepository,
    @InjectRepository(ProductImageRepository)
    productImageRepository: ProductImageRepository,
    @InjectRepository(ViewRepository) viewRepository: ViewRepository,
    @InjectRepository(ReviewRepository) reviewRepository: ReviewRepository,
    @InjectRepository(LikeRepository) likeRepository: LikeRepository,
    @InjectRepository(CartRepository) cartRepository: CartRepository,
  ) {
    this.userRepository = userRepository;
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

  async getProductDetail(productIdx: number, loginIdx?: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);

      if (!product) {
        throw new ErrorResponse(commonError.notFound);
      }

      const [productImages, viewCnt, reviewCnt, likeCnt] = await Promise.all([
        this.productImageRepository.findUrlsByProductIdx(productIdx), 
        this.viewRepository.getCntByProductIdx(productIdx), 
        this.reviewRepository.getCntByProductIdx(productIdx), 
        this.likeRepository.getCntByProductIdx(productIdx)
      ]);

      const result = {
        ...product,
        images: productImages,
        viewCnt,
        reviewCnt,
        likeCnt,
        isLike: false,
        isCart: false,
      };

      if (!loginIdx) {
        return result;
      }

      const userIdx = await this.userRepository.findIdxByLoginIdx(loginIdx);
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
