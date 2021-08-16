import request from './request';
import { CategiresGetResponseBody } from './types/categories';

export const categoriesBaseUrl = '/api/categories';

export const categoriesUrl = {
  categories: categoriesBaseUrl,
};

export const getCategories = () =>
  request<CategiresGetResponseBody[]>('GET', categoriesUrl.categories);
