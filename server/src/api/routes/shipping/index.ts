import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {handleGetShippings, handlePostShipping, handlePutShipping, handleDeleteShipping, handleSelectShipping} from './shippingController';

const shippingRouter = Router();

export default (router: Router) => {
  router.use('/shipping', shippingRouter);
    
  shippingRouter.get(
    '/',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleGetShippings,
  );

  shippingRouter.post(
    '/',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handlePostShipping,
  );

  shippingRouter.put(
    '/:id',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handlePutShipping,
  );
   
    
  shippingRouter.delete(
    '/:id',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleDeleteShipping,
  );
    
  shippingRouter.delete(
    '/:id/select',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleSelectShipping,
  );
  
  return router;
};
