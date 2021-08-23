import { Name } from './../../../../../client/src/components/cart/shippingModal/index.style';
import { getTokenFromHeader } from '@/api/middlewares/isAuth';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import ShippingService from '@/service/shipping';


export const handleGetShippingItems = async (
  req: Request,
  res: Response,
  next: NextFunction,
  ) => {
  try {
  const ShippingServiceInstance = Container.get(ShippingService);
    
  const shippingItems = await ShippingServiceInstance.getShippingItems(req.currentUser.idx);

  return res.json(shippingItems);
  } catch (e) {
    return next(e);
  }
};

export const handlePostShippingItem = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {

      const {
        name,
        phone,
        code,
        address,
        detailAddress,
      } = req.body;

      const ShippingServiceInstance = Container.get(ShippingService);
      
      const currentUser = req.currentUser;

      const {idx, createdAt, updatedAt} = await ShippingServiceInstance.postShippingItem({
        currentUser,
        name,
        phone,
        code,
        address,
        detailAddress,
      });
    
      return res.json({idx, createdAt, updatedAt});
      } catch (e) {
        return next(e);
    }
};


export const handlePutShippingItem = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {

  
      return res.status(200).json();
    } catch (e) {
      return next(e);
    }
};


export const handleDeleteShippingItem = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {

  
      return res.status(200).json();
    } catch (e) {
      return next(e);
    }
};


export const handleSelectShippingItem = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {

  
      return res.status(200).json();
    } catch (e) {
      return next(e);
    }
};