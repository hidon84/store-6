import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
  cartCreateError,
  cartDeleteError,
  cartError,
  commonError,
} from '@/constants/error';
import CartRepository from '@/repository/cart';
import UserEntity from '@/entity/user';
import ProductRepository from '@/repository/product';

@Service()
class CartService {
  private cartRepository: CartRepository;

  private productRepository: ProductRepository;

  constructor(
    @InjectRepository(CartRepository) cartRepository: CartRepository,
    @InjectRepository(ProductRepository) productRepository: ProductRepository,
  ) {
    this.cartRepository = cartRepository;
    this.productRepository = productRepository;
  }

  async getCartItems(currentUser: { idx: number }) {
    try {
      const cartItems = await this.cartRepository.getItems(currentUser.idx);
      return cartItems;
    } catch {
      throw new ErrorResponse(cartError.unable);
    }
  }

  async getCartAmount(currentUser: { idx: number }) {
    try {
      const amount = await this.cartRepository.getCartAmountOfUser(
        currentUser.idx,
      );

      return amount;
    } catch {
      throw new ErrorResponse(cartError.unable);
    }
  }

  /**
   * 장바구니에 추가 전 검증을 합니다.
   * 1. 존재하는 상품인가?
   * 2. 이미 장바구니에 담겨 있는가?
   *
   * 검증을 통과하면 상품을 유저의 cart에 저장합니다.
   */
  async addCartItem(productIdx: number, currentUser: UserEntity) {
    try {
      const product = await this.productRepository.findByIdx(productIdx);
      if (!product) {
        throw new ErrorResponse(commonError.notFound);
      }

      const cartItem = await this.cartRepository.findByIdxOfProductAndUser(
        currentUser.idx,
        productIdx,
      );
      if (cartItem) {
        throw new ErrorResponse(commonError.conflict);
      }

      const { idx, createdAt, updatedAt } = await this.cartRepository.addItem(
        product,
        currentUser,
      );

      const amount = await this.cartRepository.getCartAmountOfUser(
        currentUser.idx,
      );

      return { idx, createdAt, updatedAt, amount };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(cartCreateError.unable);
    }
  }

  async deleteCartItem(cartIdx: number, currentUser: UserEntity) {
    try {
      const product = await this.cartRepository.findByIdxOfCartIdxAndUser(
        cartIdx,
        currentUser.idx,
      );

      if (!product) throw new ErrorResponse(commonError.notFound);

      await this.cartRepository.deleteItem(cartIdx);

      const amount = await this.cartRepository.getCartAmountOfUser(
        currentUser.idx,
      );

      return { amount };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(cartDeleteError.unable);
    }
  }
}

export default CartService;
