import { getShippings } from './../../../client/src/lib/api/shipping';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
  commonError,
  ShippingError,
} from '@/constants/error';
import ShippingRepository from '@/repository/shipping';

@Service()
class CartService {
  private shippingRepository: ShippingRepository;

  constructor(
    @InjectRepository(ShippingRepository) shippingRepository: ShippingRepository,
  ) {
      this.shippingRepository = shippingRepository;
  }
    
    async getShippingItems(userIdx: number) {
        try {
            const shippingItems = await this.shippingRepository.findByUserIdx(userIdx);
            
            return shippingItems;
        } catch { 
            throw new ErrorResponse(ShippingError.unable);
        }
    }
}

export default CartService;
