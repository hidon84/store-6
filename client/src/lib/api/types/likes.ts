export interface LikesGetResponseBody {
  idx: number;
  product: {
    idx: number;
    title: string;
    thumbnail: string;
    originPrice: number;
    discountedPrice: number;
    mandatoryInfo: Record<string, string>;
    description: string;
    shipInfo: Record<string, string>;
    policy: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
}
