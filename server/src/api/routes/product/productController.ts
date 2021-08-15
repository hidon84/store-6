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

    // const info = querystring 으로 받아온 데이터
    const products = await productServiceInstance.getProducts('haha', 1);

    return res.status(200).json({ products });
  } catch (e) {
    return next(e);
  }
};
