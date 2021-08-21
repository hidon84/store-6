import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from '@/api';
import ErrorResponse from '@/utils/errorResponse';
import config from '@/config';
import errorHandler from '@/api/middlewares/error';
import { commonError } from '@/constants/error';

export default (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  if (process.env.NODE_ENV === 'development') {
    app.use(
      cors({
        origin: true,
        credentials: true,
      }),
    );
  }
  app.use(cookieParser());
  app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

  app.use(config.api.prefix, routes());

  app.all('*', (_req, _res, next) => {
    next(new ErrorResponse(commonError.notFound));
  });
  app.use(errorHandler);

  return app;
};
