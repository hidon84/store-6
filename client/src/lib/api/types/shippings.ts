export interface ShippingsGetResponseBody {
  idx: number;
  name: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShippingsPostRequestBody {
  name: string;
  address: string;
}

export interface ShippingsPostResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}

export interface ShippingPutRequsetBody {
  name: string;
  address: string;
}

export interface ShippingPutResponseBody {
  idx: number;
  createdAt: string;
  updatedAt: string;
}
