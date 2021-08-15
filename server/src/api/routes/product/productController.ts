import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import ProductService from '@/service/product';

export const handleGetProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productServiceInstance = Container.get(ProductService);

    const querys = req.query;

    const products = await productServiceInstance.getProducts(querys);

    return res.status(200).json(products);
  } catch (e) {
    return next(e);
  }
};
