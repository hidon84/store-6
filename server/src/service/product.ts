/* eslint-disable no-restricted-syntax */

import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
  commonError,
  productDetailError,
  productError,
  productViewError,
  productLikeError,
  cartDeleteError,
  likeDeleteError,
  ProductSaveError,
} from '@/constants/error';
import ProductRepository from '@/repository/product';
import ViewRepository from '@/repository/view';
import ReviewRepository from '@/repository/review';
import LikeRepository from '@/repository/like';
import CartRepository from '@/repository/cart';
import ProductImageRepository from '@/repository/productImage';
import UserRepository from '@/repository/user';
import CategoryRepository from '@/repository/category';

@Service()
class ProductService {
  private userRepository: UserRepository;

  private productRepository: ProductRepository;

  private productImageRepository: ProductImageRepository;

  private viewRepository: ViewRepository;

  private reviewRepository: ReviewRepository;

  private likeRepository: LikeRepository;

  private cartRepository: CartRepository;

  private categoryRepository: CategoryRepository;

  constructor(
    @InjectRepository(UserRepository) userRepository: UserRepository,
    @InjectRepository(ProductRepository) productRepository: ProductRepository,
    @InjectRepository(ProductImageRepository)
    productImageRepository: ProductImageRepository,
    @InjectRepository(ViewRepository) viewRepository: ViewRepository,
    @InjectRepository(ReviewRepository) reviewRepository: ReviewRepository,
    @InjectRepository(LikeRepository) likeRepository: LikeRepository,
    @InjectRepository(CartRepository) cartRepository: CartRepository,
    @InjectRepository(CategoryRepository)
    categoryRepository: CategoryRepository,
  ) {
    this.userRepository = userRepository;
    this.productRepository = productRepository;
    this.productImageRepository = productImageRepository;
    this.viewRepository = viewRepository;
    this.reviewRepository = reviewRepository;
    this.likeRepository = likeRepository;
    this.cartRepository = cartRepository;
    this.categoryRepository = categoryRepository;
  }

  async getProducts(querys: object) {
    try {
      const products = await this.productRepository.findProductsByFilter(
        querys,
      );
      return products;
    } catch {
      throw new ErrorResponse(productError.unable);
    }
  }

  async addView(productIdx: number, userIdx: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);
      const user = await this.userRepository.findByIdx(userIdx);

      if (!product || !user) {
        throw new ErrorResponse(commonError.notFound);
      }

      const existingView = await this.viewRepository.findByIdxOfProductAndUser(
        productIdx,
        userIdx,
      );
      if (existingView) {
        const { idx, updatedAt, createdAt } = existingView;
        return { idx, updatedAt, createdAt };
      }

      const newView = await this.viewRepository.addView(user, product);

      const { idx, updatedAt, createdAt } = newView;
      return { idx, updatedAt, createdAt };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(productViewError.unable);
    }
  }

  async getProductDetail(productIdx: number, loginIdx?: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);

      if (!product) {
        throw new ErrorResponse(commonError.notFound);
      }

      const includeCategory = await this.productRepository.findCategoryByIdx(
        productIdx,
      );

      let categoryIdx;

      if (includeCategory) {
        categoryIdx = includeCategory.category.idx;
      }

      if (loginIdx) {
        const views = await this.viewRepository.findTopViewedCategoryByUser(
          loginIdx,
        );

        if (views.length) {
          categoryIdx = views[0].idx;
        }
      }

      const recommend = await this.productRepository.findTopRankByCategory(
        categoryIdx,
        product.idx,
      );

      const [productImages, viewCnt, reviewCnt, likeCnt] = await Promise.all([
        this.productImageRepository.findUrlsByProductIdx(productIdx),
        this.viewRepository.getCntByProductIdx(productIdx),
        this.reviewRepository.getCntByProductIdx(productIdx),
        this.likeRepository.getCntByProductIdx(productIdx),
      ]);

      const result = {
        ...product,
        images: productImages,
        viewCnt,
        reviewCnt,
        likeCnt,
        isLike: false,
        isCart: false,
        recommend,
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

      return { ...result };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(productDetailError.unable);
    }
  }

  async addLike(productIdx: number, userIdx: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);
      const user = await this.userRepository.findByIdx(userIdx);

      if (!product || !user) {
        throw new ErrorResponse(commonError.notFound);
      }

      const existingLike = await this.likeRepository.findByProductAndUser(
        product,
        user,
      );

      if (existingLike) {
        throw new ErrorResponse(commonError.conflict);
      }

      const newLike = await this.likeRepository.addItem(user, product);

      const { idx, updatedAt, createdAt } = newLike;
      return { idx, updatedAt, createdAt };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(productLikeError.unable);
    }
  }

  async removeCart(productIdx: number, userIdx: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);
      const user = await this.userRepository.findByIdx(userIdx);

      if (!product || !user) {
        throw new ErrorResponse(commonError.notFound);
      }

      const cart = await this.cartRepository.findByIdxOfProductAndUser(
        userIdx,
        productIdx,
      );

      if (!cart) {
        throw new ErrorResponse(commonError.notFound);
      }

      await this.cartRepository.deleteItem(cart.idx);

      const amount = await this.cartRepository.getCartAmountOfUser(userIdx);

      return { amount };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(cartDeleteError.unable);
    }
  }

  async removeLike(productIdx: number, userIdx: number) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);
      const user = await this.userRepository.findByIdx(userIdx);

      if (!product || !user) {
        throw new ErrorResponse(commonError.notFound);
      }

      const like = await this.likeRepository.findByIdxOfProductAndUser(
        userIdx,
        productIdx,
      );

      if (!like) {
        throw new ErrorResponse(commonError.notFound);
      }

      await this.likeRepository.deleteItem(like);
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(likeDeleteError.unable);
    }
  }

  async addProduct(
    category: string,
    title: string,
    thumbnail: string,
    originPrice: number,
    discountedPrice: number,
    rank: number,
    images: string[],
    mandatoryInfo: { key: string; value: string },
    shipInfo: { key: string; value: string },
  ) {
    try {
      const currentCategory = await this.categoryRepository.findByName(
        category,
      );

      const newProduct = await this.productRepository.saveItem(
        currentCategory!,
        title,
        thumbnail,
        originPrice,
        discountedPrice,
        rank,
        mandatoryInfo,
        shipInfo,
      );

      for await (const image of images) {
        await this.productImageRepository.saveItem(newProduct, image);
      }

      const { idx, updatedAt, createdAt } = newProduct;

      return { idx, updatedAt, createdAt };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(ProductSaveError.unable);
    }
  }
}

export default ProductService;
