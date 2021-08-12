import { Express } from 'express';
import Container from 'typedi';
import { Connection } from 'typeorm';
import connect from './connect';
import expressLoader from './express';
import entityInjector from './entityInjector';


export default async (app: Express) => {
  expressLoader(app);
  console.info('Express loaded');

  await connect();
  console.info('DB connected');

  const connection = Container.get<Connection>('connection');
  entityInjector(connection);
  console.info('entities setting completed');
};
