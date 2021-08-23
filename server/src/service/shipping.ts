import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
  commonError,
  ShippingPostError,
  ShippingError,
  ShippingPutError
} from '@/constants/error';
import ShippingRepository from '@/repository/shipping';
import ShippingEntity from '@/entity/shipping';
import UserRepository from '@/repository/user';
import UserEntity  from '@/entity/user';


interface ShipppingInfo{
  currentUser: UserEntity;
  shippingIdx: number;
  name: string;
  phone: string;
  code: string;
  address: string;
  detailAddress: string;
}

@Service()
class CartService {
    private shippingRepository: ShippingRepository;
    private userRepository : UserRepository
    constructor(
        @InjectRepository(ShippingRepository) shippingRepository: ShippingRepository,
    ) {
        this.shippingRepository = shippingRepository;
        this.userRepository = this.userRepository;
    }
    

    async getShippings(userIdx: number) {
        try {
            const shippings = await this.shippingRepository.findByUserIdx(userIdx);
            return shippings;
        } catch {
            throw new ErrorResponse(ShippingError.unable);
        }
    }

    async postShipping({ 
        currentUser,
        name,
        phone,
        code,
        address,
        detailAddress
    }:Omit<ShipppingInfo,"shippingIdx">) {
        try {
          const shipping = new ShippingEntity();
            shipping.user = currentUser;
            shipping.name = name;   
            shipping.phone = phone;
            shipping.code = code;
            shipping.address = address;
            shipping.detailAddress = detailAddress;

            const { savedShipping } = await this.shippingRepository.saveItem(shipping);
          
            const { idx, createdAt, updatedAt } = savedShipping;
            
            return {idx, createdAt, updatedAt};
        } catch { 
            throw new ErrorResponse(ShippingPostError.unable);
        }
    }


    async putShipping({ 
        currentUser,
        shippingIdx,
        name,
        phone,
        code,
        address,
        detailAddress
    }:Partial<ShipppingInfo>&Required<Pick<ShipppingInfo,'currentUser' | 'shippingIdx'>>) {
        try {

            const shipping = await this.shippingRepository.findByIdx(shippingIdx!);

            if (!shipping) { 
              throw new ErrorResponse(commonError.notFound);
            }

            if (currentUser.idx !== shipping.user.idx) { 
              throw new ErrorResponse(commonError.forbidden);
            }
            
            shipping.name = name ?? shipping.name;
            shipping.phone = phone ?? shipping.phone;
            shipping.code = code ?? shipping.code;
            shipping.address = address ?? shipping.address;
            shipping.detailAddress = detailAddress ?? shipping.detailAddress;

            const { savedShipping } = await this.shippingRepository.saveItem(shipping);

            const { idx, createdAt, updatedAt } = savedShipping;
            
            return {idx, createdAt, updatedAt};
        } catch(e) { 
            if (e?.isOperational) {
                throw e;
            }
            throw new ErrorResponse(ShippingPutError.unable);
        }
    }
}

export default CartService;
