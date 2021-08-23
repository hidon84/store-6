import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {
  handleGetCartItems,
  handleDeleteCartItem,
  handleCartAmount,
} from './cartController';

const cartRouter = Router();

export default (router: Router) => {
  router.use('/cart', cartRouter);

  cartRouter.get(
    '/',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleGetCartItems,
  );

  cartRouter.delete(
    '/:id',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleDeleteCartItem,
  );

  cartRouter.get(
    '/amount',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleCartAmount,
  );

  return router;
};
