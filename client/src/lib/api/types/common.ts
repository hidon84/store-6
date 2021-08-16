export interface ApiResponse {
  statusCode: number;
}

export interface UpdateInfo {
  idx: number;
  createdAt: Date | string;
  updatedAt: Date | string;
}
