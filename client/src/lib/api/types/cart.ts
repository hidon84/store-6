export interface CartGetResponseBody {
  idx: number;
  product: {
    idx: number;
    title: string;
    thumbnail: string;
    price: number;
    description: string;
    shipSummary: string;
    shipDetail: string;
    policy: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}
