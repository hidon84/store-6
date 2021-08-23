import { EntityRepository, Repository } from 'typeorm';
import CartEntity from '@/entity/cart';
import UserEntity from '@/entity/user';
import ProductEntity from '@/entity/product';

@EntityRepository(CartEntity)
class CartRepository extends Repository<CartEntity> {
  async findByIdxOfProductAndUser(userIdx: number, productIdx: number) {
    const cartItem = await this.findOne({
      where: {
        user: { idx: userIdx },
        product: { idx: productIdx },
      },
    });
    return cartItem;
  }

  async getCartAmountOfUser(userIdx: number) {
    const amount = await this.count({
      where: {
        user: { idx: userIdx },
      },
    });
    return amount;
  }

  async getItems(userIdx: number) {
    const cartItems = await this.find({
      select: ['idx', 'product', 'createdAt', 'updatedAt'],
      where: {
        user: userIdx,
      },
      relations: ['product'],
    });
    return cartItems;
  }

  async addItem(product: ProductEntity, user: UserEntity) {
    const cart = new CartEntity();
    cart.product = product;
    cart.user = user;
    const newCart = await this.save(cart);
    return newCart;
  }

  async deleteItem(cartIdx: number) {
    await this.delete({ idx: cartIdx });
  }
}

export default CartRepository;
