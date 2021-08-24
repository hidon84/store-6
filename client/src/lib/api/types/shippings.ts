export interface ShippingsGetResponseBody {
  idx: number;
  name: string;
  phone: string;
  address: string;
  detailAddress: string;
  code: string;
  defaultShipping: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ShippingsPostRequestBody {
  name: string;
  phone: string;
  address: string;
  detailAddress?: string;
  code: string;
}

export interface ShippingsPostResponseBody {
  idx: number;
  createdAt: string;
  upstringdAt: string;
}

export interface ShippingPutRequsetBody {
  name?: string;
  phone?: string;
  address?: string;
  detailAddress?: string;
  code?: string;
}

export interface ShippingPutResponseBody {
  idx: number;
  createdAt: string;
  upstringdAt: string;
}


export interface ShippingSelectResponseBody {
  idx: number;
  createdAt: string;
  upstringdAt: string;
}