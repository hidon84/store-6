export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export interface UpdateDateInfo {
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdateInfo extends UpdateDateInfo {
  idx: number;
  createdAt: string;
  updatedAt: string;
}
