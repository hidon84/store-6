import request from './request';
import {
  ReviewDetailGetResponseBody,
  ReviewDetailPutRequsetBody,
  ReviewDetailPutResponseBody,
} from './types/reviews';

export const reviewsBaseUrl = '/api/reviews';

export const reviewsUrl = {
  reviewDetail: (id: number) => `${reviewsBaseUrl}/${id}`,
};

export const getReviewDetail = (id: number) =>
  request<ReviewDetailGetResponseBody>('GET', reviewsUrl.reviewDetail(id));

export const putReviewDetail = (
  id: number,
  reqData: ReviewDetailPutRequsetBody,
) =>
  request<ReviewDetailPutResponseBody, ReviewDetailPutRequsetBody>(
    'PUT',
    reviewsUrl.reviewDetail(id),
    reqData,
  );

export const deleteReviewDetail = (id: number) =>
  request('DELETE', reviewsUrl.reviewDetail(id));
