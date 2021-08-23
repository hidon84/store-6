import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import ErrorResponse from '@/utils/errorResponse';
import CartService from '@/service/cart';
import { commonError } from '@/constants/error';

export const handleGetCartItems = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const cartServiceInstance = Container.get(CartService);

    const cartItems = await cartServiceInstance.getCartItems(req.currentUser);

    return res.status(200).json(cartItems);
  } catch (e) {
    return next(e);
  }
};

export const handleDeleteCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const cartServiceInstance = Container.get(CartService);

    const cartIdx = Number(req.params.id);
    if (Number.isNaN(cartIdx) || cartIdx <= 0) {
      throw new ErrorResponse(commonError.invalidPathParams);
    }

    await cartServiceInstance.deleteCartItem(cartIdx);

    return res.json();
  } catch (e) {
    return next(e);
  }
};
