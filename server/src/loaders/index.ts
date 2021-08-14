import { Express } from 'express';
import Container from 'typedi';
import { Connection } from 'typeorm';
import connect from './connect';
import expressLoader from './express';
import entityInjector from './entityInjector';
import modelInjector from './modelInjector';

export default async (app: Express) => {
  expressLoader(app);
  console.info('Express loaded');

  await connect();
  console.info('DB connected');
  const connection = Container.get<Connection>('connection');

  entityInjector();
  console.info('entities injected');

  modelInjector(connection);
  console.info('models injected');
};
