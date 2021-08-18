export interface ProductsGetRequestQuery {
  category?: number;
  search?: string;
  order?: 'recent' | 'low-price' | 'high-price';
  page: number;
  limit: number;
}

export interface ProductsGetResponseBody {
  idx: number;
  title: string;
  thumbnail: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductDetailGetResponseBody {
  idx: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  shipSummary: string;
  shipDetail: string;
  policy: string;
  viewCnt: number;
  reviewCnt: number;
  likeCnt: number;
  isLike?: boolean;
  isCart?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductReviewsGetResponseBody {
  idx: number;
  title: string;
  user: {
    idx: number;
    id: string;
  };
  rate: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductViewPostResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductCartPostResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductLikePostResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductReviewPostRequestBody {
  title: string;
  content: string;
  rate: number;
}

export interface ProductReviewPostResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}
