import request from './request';
import { LikesGetResponseBody } from './types/likes';

export const likeBaseUrl = '/api/likes';

export const likesUrl = {
  likes: likeBaseUrl,
};

export const getLikeItems = () =>
  request<LikesGetResponseBody[]>('GET', likesUrl.likes);
