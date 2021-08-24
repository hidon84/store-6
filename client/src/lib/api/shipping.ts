import request from './request';
import {} from './types/cart';

import {
  ShippingsGetResponseBody,
  ShippingsPostRequestBody,
  ShippingsPostResponseBody,
  ShippingPutRequsetBody,
  ShippingPutResponseBody,
  ShippingSelectResponseBody,
} from './types';

export const shippingBaseUrl = '/api/shippings';

export const shippingsUrl = {
  shippings: () => shippingBaseUrl,
  shippingPost: () => shippingBaseUrl,
  shippingPut: (id: number) => `${shippingBaseUrl}/${id}`,
  shippingDelete: (id: number) => `${shippingBaseUrl}/${id}`,
  shippingSelect: (id: number) => `${shippingBaseUrl}/${id}/select`,
};

export const getShippings = () =>
  request<ShippingsGetResponseBody[]>('GET', shippingsUrl.shippings());

export const postShpping = (reqData: ShippingsPostRequestBody) =>
  request<ShippingsPostResponseBody, ShippingsPostRequestBody>(
    'POST',
    shippingsUrl.shippingPost(),
    reqData,
  );

export const selectShipping = (id: number) =>
  request<ShippingSelectResponseBody>('POST', shippingsUrl.shippingSelect(id));

export const putShipping = (id: number, reqData: ShippingPutRequsetBody) =>
  request<ShippingPutResponseBody, ShippingPutRequsetBody>(
    'PUT',
    shippingsUrl.shippingPut(id),
    reqData,
  );

export const deleteShipping = (id: number) =>
  request('DELETE', shippingsUrl.shippingDelete(id));
