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

  async saveItem(item: ShippingEntity) { 
    const savedShipping = await this.save(item)
    return { savedShipping };
  }

  
  async findByIdx(idx: number) {
    const shipping= await this.findOne({
      where: { idx },
      relations: ['user']
    });
    return shipping;
  }

  async deleteItem(item: ShippingEntity) { 
    await this.remove(item)
  }


  async findSelectedByUser(userIdx: number) { 
    const shipping= await this.findOne({
      where: { user: userIdx , selected: true},
    });
    return shipping;
  }
}

export default ShippingRepository;
