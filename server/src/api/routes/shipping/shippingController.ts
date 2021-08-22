import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import ShippingService from '@/service/shipping';


export const handleGetShippingItems = async (
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


export const handlePostShippingItem = async (
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