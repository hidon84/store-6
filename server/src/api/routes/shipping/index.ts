import { Router } from 'express';
import middlewares from '@/api/middlewares';
import {handleGetShippingItems, handlePostShippingItem, handlePutShippingItem, handleDeleteShippingItem, handleSelectShippingItem} from './shippingController';

const shippingRouter = Router();

export default (router: Router) => {
  router.use('/shipping', shippingRouter);
    
  shippingRouter.get(
    '/',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleGetShippingItems,
  );

  shippingRouter.post(
    '/',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handlePostShippingItem,
  );

  shippingRouter.put(
    '/:id',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handlePutShippingItem,
  );
   
    
  shippingRouter.delete(
    '/:id',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleDeleteShippingItem,
  );
    
  shippingRouter.delete(
    '/:id/select',
    middlewares.isAuth,
    middlewares.isAccessToken,
    middlewares.attachCurrentUser,
    handleSelectShippingItem,
  );
  
  return router;
};
