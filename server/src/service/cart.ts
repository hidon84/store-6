import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import { CartError } from '@/constants/error';
import CartRepository from '@/repository/cart';

@Service()
class CartService {
  private cartRepository: CartRepository;

  constructor(
    @InjectRepository(CartRepository) cartRepository: CartRepository,
  ) {
    this.cartRepository = cartRepository;
  }

  async getCartItems(currentUser: { idx: number }) {
    try {
      const cartItems = await this.cartRepository.getItems(currentUser.idx);
      return cartItems;
    } catch {
      throw new ErrorResponse(CartError.unable);
    }
  }

  async deleteCartItem(cartIdx: number) {
    try {
      await this.cartRepository.deleteItem(cartIdx);
    } catch {
      throw new ErrorResponse(CartError.unable);
    }
  }
}

export default CartService;
