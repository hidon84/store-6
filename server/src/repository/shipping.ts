import { EntityRepository, Repository } from 'typeorm';
import ShippingEntity from '@/entity/shipping';

@EntityRepository(ShippingEntity)
class ShippingRepository extends Repository<ShippingEntity> {

  async findByUserIdx(userIdx: number) {
    const shippings = await this.find({
      where: {
        user : userIdx
      },
      order: {
        updatedAt: 'DESC'
      }
    })
    return shippings;
  }
}

export default ShippingRepository;
