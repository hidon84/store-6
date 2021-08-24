import request from './request';
import { LikesGetResponseBody } from './types/likes';

export const likeBaseUrl = '/api/likes';

export const likesUrl = {
  likes: likeBaseUrl,
  likeDelete: (id: number) => `${likeBaseUrl}/${id}`,
};

export const getLikeItems = () =>
  request<LikesGetResponseBody[]>('GET', likesUrl.likes);

export const deleteShipping = (id: number) =>
  request('DELETE', likesUrl.likeDelete(id));
