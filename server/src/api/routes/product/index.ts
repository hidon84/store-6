import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {
  handleGetProducts,
  handleGetProductDetail,
  handleAddView,
  handleAddLike,
} from './productController';

const productRouter = Router();

export default (router: Router) => {
  router.use('/products', productRouter);

  productRouter.get('/', handleGetProducts);
  productRouter.get('/:id', handleGetProductDetail);
  productRouter.post(
    '/:id/view',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleAddView,
  );

  productRouter.post(
    '/:id/like',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleAddLike,
  );
  return router;
};
