import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '@/utils/errorResponse';
import { commonError, multerError } from '@/constants/error';

const createErrorInfoDevelopment = (err: ErrorResponse) => {
  return {
    success: false,
    statusCode: err?.statusCode || 500,
    message: err.message,
    stack: err.stacks || err.stack,
  };
};

const createErrorInfoProduction = (err: ErrorResponse) => {
  return {
    success: false,
    statusCode: err?.statusCode || commonError.wrong.statusCode,
    message: err.isOperational ? err.message : commonError.wrong.message,
  };
};

const errorHandler = (
  err: ErrorResponse,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let errorInfo;
  let errorResponse = err;
  const isDevelopment = process.env.NODE_ENV === 'development';

  if (errorResponse.name === 'UnauthorizedError') {
    errorResponse = new ErrorResponse(commonError.unauthorized);
  }

  if (errorResponse.message === multerError.tooLarge) {
    errorResponse = new ErrorResponse(commonError.tooLarge);
  } else if (errorResponse.message === multerError.unexpectedField) {
    errorResponse = new ErrorResponse(commonError.unexpectedField);
  }

  if (isDevelopment) {
    errorInfo = createErrorInfoDevelopment(errorResponse);
  } else {
    errorInfo = createErrorInfoProduction(errorResponse);
  }

  res.status(errorInfo.statusCode).json(errorInfo);
};

export default errorHandler;
