export interface ProductsGetRequestQuery {
  category?: number;
  search?: string;
  order?: 'recent' | 'price-low' | 'price-high';
  page: number;
  limit: number;
}

export interface ProductsGetResponseBody {
  idx: number;
  title: string;
  thumbnail: string;
  originPrice: number;
  discountedPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductDetailGetResponseBody {
  idx: number;
  title: string;
  thumbnail: string;
  originPrice: number;
  discountedPrice: number;
  mandatoryInfo: Record<string, string>;
  shipInfo: Record<string, string>;
  description: string;
  policy: string;
  images: string[];
  viewCnt: number;
  reviewCnt: number;
  likeCnt: number;
  isLike?: boolean;
  isCart?: boolean;
  createdAt: string;
  updatedAt: string;
  recommend: {
    idx: number;
    thumbnail: string;
  }[];
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
  amount: number;
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

export interface ProductCartDeleteResponseBody {
  amount: number;
}
