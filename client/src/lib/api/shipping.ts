import request from './request';
import {} from './types/cart';

import {
  ShippingsGetResponseBody,
  ShippingsPostRequestBody,
  ShippingsPostResponseBody,
  ShippingPutRequsetBody,
  ShippingPutResponseBody,
} from './types';

export const shippingBaseUrl = '/api/shippings';

export const shippingsUrl = {
  shippings: () => shippingBaseUrl,
  shippingPost: () => shippingBaseUrl,
  shippingDetail: (id: number) => `${shippingBaseUrl}/${id}`,
};

export const getShippings = () =>
  request<ShippingsGetResponseBody[]>('GET', shippingsUrl.shippings());

export const postShpping = (reqData: ShippingsPostRequestBody) =>
  request<ShippingsPostResponseBody, ShippingsPostRequestBody>(
    'POST',
    shippingsUrl.shippingPost(),
    reqData,
  );

export const putShipping = (id: number, reqData: ShippingPutRequsetBody) =>
  request<ShippingPutResponseBody, ShippingPutRequsetBody>(
    'PUT',
    shippingsUrl.shippingDetail(id),
    reqData,
  );

export const deleteShipping = (id: number) =>
  request('DELETE', shippingsUrl.shippingDetail(id));
