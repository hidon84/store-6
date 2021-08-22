import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {} from './shippingController';

const shippingRouter = Router();

export default (router: Router) => {
  router.use('/cart', shippingRouter);

  return router;
};
