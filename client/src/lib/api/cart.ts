import request from './request';
import { CartGetResponseBody, CartDeleteResponseBody, CartGetAmountResponseBody } from './types/cart';

export const cartBaseUrl = '/api/cart';

export const cartUrl = {
  cart: cartBaseUrl,
  cartDetail: (id: number) => `${cartBaseUrl}/${id}`,
  cartAmount: () => `${cartBaseUrl}/amount`,
};

export const getCartItems = () =>
  request<CartGetResponseBody[]>('GET', cartUrl.cart);

export const deleteCartItem = (id: number) =>
  request<CartDeleteResponseBody>('DELETE', cartUrl.cartDetail(id));

export const getCartAmount = () =>
  request<CartGetAmountResponseBody>('GET', cartUrl.cartAmount());
