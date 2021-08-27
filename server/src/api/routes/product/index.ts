import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {
  handleGetProducts,
  handleGetProductDetail,
  handleAddView,
  handleAddLike,
  handleAddCart,
  handleRemoveCart,
  handleRemoveLike,
  handleAddProduct,
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

  productRouter.post(
    '/:id/cart',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleAddCart,
  );

  productRouter.delete(
    '/:id/cart',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleRemoveCart,
  );

  productRouter.delete(
    '/:id/like',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleRemoveLike,
  );

  productRouter.post('/', handleAddProduct);
  return router;
};
