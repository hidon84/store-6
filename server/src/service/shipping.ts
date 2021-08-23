import { getShippings } from './../../../client/src/lib/api/shipping';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
ShippingPostError,
  ShippingError,
} from '@/constants/error';
import ShippingRepository from '@/repository/shipping';
import ShippingEntity from '@/entity/shipping';
import UserRepository from '@/repository/user';
import UserEntity  from '@/entity/user';


interface PostShippingrInfo {
    currentUser: UserEntity;
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
    

    async getShippingItems(userIdx: number) {
        try {
            const shippingItems = await this.shippingRepository.findByUserIdx(userIdx);
            
            return shippingItems;
        } catch {
            throw new ErrorResponse(ShippingError.unable);
        }

    }

    async postShippingItem({ 
        currentUser,
        name,
        phone,
        code,
        address,
        detailAddress
    }:PostShippingrInfo) {
        try {
            const shipping = new ShippingEntity();
            shipping.user = currentUser;
            shipping.name = name;   
            shipping.phone = phone;
            shipping.code = code;
            shipping.address = address;
            shipping.detailAddress = detailAddress;

            const { createdShipping } = await this.shippingRepository.createItem(shipping);
            
            const { idx, createdAt, updatedAt } = createdShipping;
            
            return {idx, createdAt, updatedAt};
        } catch { 
            throw new ErrorResponse(ShippingPostError.unable);
        }
    }
}

export default CartService;
