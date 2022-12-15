import type { SerializedError } from '@reduxjs/toolkit';
import type { ErrorResponse } from '../apiTypes';

export type PaginationProps = {
  page?: number;
  limit?: number;
};

export type CustomError = {
  status: number;
  data: ErrorResponse;
};

export type Error = SerializedError | CustomError | undefined;
