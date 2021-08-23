import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import ErrorResponse from '@/utils/errorResponse';
import {
  commonError,
  ShippingPostError,
  ShippingError,
  ShippingPutError,
  ShippingDeleteError,
  ShippingSelectError,
} from '@/constants/error';
import ShippingRepository from '@/repository/shipping';
import ShippingEntity from '@/entity/shipping';
import UserEntity from '@/entity/user';
import * as validationHelper from '@/helper/validation';

interface ShipppingInfo {
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

  constructor(
    @InjectRepository(ShippingRepository)
    shippingRepository: ShippingRepository,
  ) {
    this.shippingRepository = shippingRepository;
  }

  async getShippings({
    currentUser,
  }: Partial<ShipppingInfo> & Required<Pick<ShipppingInfo, 'currentUser'>>) {
    try {
      const userIdx = currentUser.idx;
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
    detailAddress,
  }: Omit<ShipppingInfo, 'shippingIdx'>) {
    try {
      const shipping = new ShippingEntity();
      shipping.user = currentUser;
      shipping.name = name;
      shipping.phone = phone;
      shipping.code = code;
      shipping.address = address;
      shipping.detailAddress = detailAddress;

      if (phone && !validationHelper.phoneValidator(phone)) {
        throw new ErrorResponse(ShippingPostError.invalidPhone);
      }

      const { savedShipping } = await this.shippingRepository.saveItem(
        shipping,
      );

      const { idx, createdAt, updatedAt } = savedShipping;

      return { idx, createdAt, updatedAt };
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
    detailAddress,
  }: Partial<ShipppingInfo> &
    Required<Pick<ShipppingInfo, 'currentUser' | 'shippingIdx'>>) {
    try {
      const shipping = await this.shippingRepository.findByIdx(shippingIdx);

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

      if (phone && !validationHelper.phoneValidator(phone)) {
        throw new ErrorResponse(ShippingPostError.invalidPhone);
      }

      const { savedShipping } = await this.shippingRepository.saveItem(
        shipping,
      );

      const { idx, createdAt, updatedAt } = savedShipping;

      return { idx, createdAt, updatedAt };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(ShippingPutError.unable);
    }
  }

  async deleteShipping({
    currentUser,
    shippingIdx,
  }: Partial<ShipppingInfo> &
    Required<Pick<ShipppingInfo, 'currentUser' | 'shippingIdx'>>) {
    try {
      const shipping = await this.shippingRepository.findByIdx(shippingIdx);

      if (!shipping) {
        throw new ErrorResponse(commonError.notFound);
      }

      if (currentUser.idx !== shipping.user.idx) {
        throw new ErrorResponse(commonError.forbidden);
      }

      await this.shippingRepository.deleteItem(shipping);
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(ShippingDeleteError.unable);
    }
  }

  async selectShipping({
    currentUser,
    shippingIdx,
  }: Partial<ShipppingInfo> &
    Required<Pick<ShipppingInfo, 'currentUser' | 'shippingIdx'>>) {
    try {
      const shipping = await this.shippingRepository.findByIdx(shippingIdx);

      if (!shipping) {
        throw new ErrorResponse(commonError.notFound);
      }

      if (currentUser.idx !== shipping.user.idx) {
        throw new ErrorResponse(commonError.forbidden);
      }

      const selectedShipping = await this.shippingRepository.findSelectedByUser(
        currentUser.idx,
      );

      if (selectedShipping) {
        selectedShipping.defaultShipping = false;
        await this.shippingRepository.saveItem(selectedShipping);
      }

      shipping.defaultShipping = true;

      const { savedShipping } = await this.shippingRepository.saveItem(
        shipping,
      );

      const { idx, createdAt, updatedAt } = savedShipping;

      return { idx, createdAt, updatedAt };
    } catch (e) {
      if (e?.isOperational) {
        throw e;
      }
      throw new ErrorResponse(ShippingSelectError.unable);
    }
  }
}

export default CartService;
