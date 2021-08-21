import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import CartService from '@/service/cart';

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

    const cartIdx = Number(req.params.id)

    await cartServiceInstance.deleteCartItem(cartIdx);

    return res.json();
  } catch (e) {
    return next(e);
  }
};