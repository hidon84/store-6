import request from './request';
import { CartGetResponseBody, CartDeleteResponseBody } from './types/cart';

export const cartBaseUrl = '/api/cart';

export const cartUrl = {
  cart: cartBaseUrl,
  cartDetail: (id: number) => `${cartBaseUrl}/${id}`,
};

export const getCartItems = () =>
  request<CartGetResponseBody[]>('GET', cartUrl.cart);

export const deleteCartItem = (id: number) =>
  request<CartDeleteResponseBody>('DELETE', cartUrl.cartDetail(id));
