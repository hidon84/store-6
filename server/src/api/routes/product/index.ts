import { Router } from 'express';
import { handleGetProducts } from './productController';

const productRouter = Router();

export default (router: Router) => {
  router.use('/products', productRouter);

  productRouter.get('/', handleGetProducts);

  return router;
};
