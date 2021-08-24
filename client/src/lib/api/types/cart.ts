export interface CartGetResponseBody {
  idx: number;
  product: {
    idx: number;
    title: string;
    thumbnail: string;
    originPrice: number;
    discountedPrice: string;
    mandatoryInfo: object;
    description: string;
    shipInfo: object;
    policy: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CartDeleteResponseBody { 
  amount: number;
}

export interface CartGetAmountResponseBody { 
  amount: number;
}