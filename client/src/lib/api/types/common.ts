export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiResponse {
  statusCode: number;
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
