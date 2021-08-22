import { EntityRepository, Repository } from 'typeorm';
import CartEntity from '@/entity/cart';

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

  async deleteItem(cartIdx: number) {
    await this.delete({ idx: cartIdx });
  }
}

export default CartRepository;
