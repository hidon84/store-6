import request from './request';
import {
  ProductsGetRequestQuery,
  ProductsGetResponseBody,
  ProductDetailGetResponseBody,
  ProductReviewsGetResponseBody,
  ProductViewPostResponseBody,
  ProductCartPostResponseBody,
  ProductLikePostResponseBody,
  ProductReviewPostRequestBody,
  ProductReviewPostResponseBody,
  ProductCartDeleteResponseBody,
} from './types';

export const productsBaseUrl = '/api/products';

export const productsUrl = {
  products: productsBaseUrl,
  productDetail: (id: number) => `${productsBaseUrl}/${id}`,
  productReviews: (id: number) => `${productsBaseUrl}/${id}/reviews`,
  productView: (id: number) => `${productsBaseUrl}/${id}/view`,
  productCart: (id: number) => `${productsBaseUrl}/${id}/cart`,
  productReview: (id: number) => `${productsBaseUrl}/${id}/review`,
  productLike: (id: number) => `${productsBaseUrl}/${id}/like`,
};

export const getProducts = (query?: ProductsGetRequestQuery) =>
  request<ProductsGetResponseBody[], null, ProductsGetRequestQuery>(
    'GET',
    productsUrl.products,
    null,
    query,
  );

export const getProductDetail = (id: number) =>
  request<ProductDetailGetResponseBody>('GET', productsUrl.productDetail(id));

export const getProductReviews = (id: number) =>
  request<ProductReviewsGetResponseBody[]>(
    'GET',
    productsUrl.productReviews(id),
  );

export const postProductToView = (id: number) =>
  request<ProductViewPostResponseBody>('POST', productsUrl.productView(id));

export const postProductToCart = (id: number) =>
  request<ProductCartPostResponseBody>('POST', productsUrl.productCart(id));

export const postProductToLike = (id: number) =>
  request<ProductLikePostResponseBody>('POST', productsUrl.productLike(id));

export const postReviewToProduct = (
  id: number,
  reqData: ProductReviewPostRequestBody,
) =>
  request<ProductReviewPostResponseBody, ProductReviewPostRequestBody>(
    'POST',
    productsUrl.productReview(id),
    reqData,
  );

export const deleteProductFromCart = (id: number) =>
  request<ProductCartDeleteResponseBody>('DELETE', productsUrl.productCart(id));

export const deleteProductFromLike = (id: number) =>
  request('DELETE', productsUrl.productLike(id));
