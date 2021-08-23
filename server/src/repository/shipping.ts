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

  async createItem(item: ShippingEntity) { 
    const createdShipping = await this.save(item)
    
    return { createdShipping };
  }

}

export default ShippingRepository;
