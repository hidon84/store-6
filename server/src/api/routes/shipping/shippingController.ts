import ErrorResponse from '@/utils/errorResponse';
import { commonError } from '@/constants/error';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import ShippingService from '@/service/shipping';


export const handleGetShippings = async (
  req: Request,
  res: Response,
  next: NextFunction,
  ) => {
  try {
  const ShippingServiceInstance = Container.get(ShippingService);
    
  const currentUser = req.currentUser;
    
    const shippings = await ShippingServiceInstance.getShippings({ currentUser });

  return res.json(shippings);
  } catch (e) {
    return next(e);
  }
};


export const handlePostShipping = async (
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

      const {idx, createdAt, updatedAt} = await ShippingServiceInstance.postShipping({
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


export const handlePutShipping = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
        const currentUser = req.currentUser;
        const {
        name,
        phone,
        code,
        address,
        detailAddress,
      } = req.body;

      const shippingIdx = Number(req.params.id);
      if (Number.isNaN(shippingIdx) || shippingIdx <= 0) {
        throw new ErrorResponse(commonError.invalidPathParams);
      }

      const ShippingServiceInstance = Container.get(ShippingService);

      const {idx, createdAt, updatedAt} = await ShippingServiceInstance.putShipping({
        currentUser,
        shippingIdx,
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


export const handleDeleteShipping = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {

    const currentUser = req.currentUser;

    const shippingIdx = Number(req.params.id);
    if (Number.isNaN(shippingIdx) || shippingIdx <= 0) {
      throw new ErrorResponse(commonError.invalidPathParams);
    }

    const ShippingServiceInstance = Container.get(ShippingService);

      await ShippingServiceInstance.deleteShipping({
        currentUser,shippingIdx
      });
  
    return res.json();
  } catch (e) {
    return next(e);
  }
};


export const handleSelectShipping = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
  try {
      
      const currentUser = req.currentUser;
  
      const shippingIdx = Number(req.params.id);
      if (Number.isNaN(shippingIdx) || shippingIdx <= 0) {
        throw new ErrorResponse(commonError.invalidPathParams);
      }
      

      const ShippingServiceInstance = Container.get(ShippingService);
  
      const {idx, createdAt, updatedAt} = await ShippingServiceInstance.selectShipping({
        currentUser,shippingIdx
      });
    
      return res.json({idx, createdAt, updatedAt});
    } catch (e) {
      return next(e);
    }
};