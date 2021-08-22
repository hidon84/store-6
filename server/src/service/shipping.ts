import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import ShippingRepository from '@/repository/shipping';

@Service()
class CartService {
  private shippingRepository: ShippingRepository;

  constructor(
    @InjectRepository(ShippingRepository) shippingRepository: ShippingRepository,
  ) {
    this.shippingRepository = shippingRepository;
  }
}

export default CartService;
