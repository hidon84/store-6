import request from './request';
import { CartGetResponseBody} from './types/cart';

export const cartBaseUrl = '/api/cart';

export const cartUrl = {
  cart: cartBaseUrl,
  cartDetail: (id: number) => `${cartBaseUrl}/${id}`,

};

export const getCartItems = () =>
  request<CartGetResponseBody[]>('GET', cartUrl.cart);


export const deleteCartItem = (id: number) =>
request('DELETE', cartUrl.cartDetail(id));