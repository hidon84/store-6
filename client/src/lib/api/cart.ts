import request from './request';
import { CartGetResponseBody } from './types/cart';

export const cartBaseUrl = '/api/cart';

export const cartUrl = {
  cart: cartBaseUrl,
};

export const getCartItems = () =>
  request<CartGetResponseBody[]>('GET', cartUrl.cart);
