import { EntityRepository, Repository } from 'typeorm';
import ShippingEntity from '@/entity/shipping';

@EntityRepository(ShippingEntity)
class ShippingRepository extends Repository<ShippingEntity> {

}

export default ShippingRepository;
