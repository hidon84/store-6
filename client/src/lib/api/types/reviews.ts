export interface ReviewDetailGetResponseBody {
  idx: number;
  title: string;
  content: string;
  user: {
    idx: number;
    id: string;
  };
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewDetailPutResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewDetailPutRequsetBody {
  idx: number;
  title: string;
  content: string;
  rate: number;
}
