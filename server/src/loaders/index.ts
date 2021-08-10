import { Express } from 'express';
import Container from 'typedi';
import { BaseEntity, Connection } from 'typeorm';
import User from '@/entity/user';
import connect from './connect';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';
import expressLoader from './express';

export default async (app: Express) => {
  expressLoader(app);
  console.info('Express loaded');

  await connect();
  console.info('DB connected');

  const connection = Container.get<Connection>('connection');
  User.useConnection(connection);

  const entities: DependencyInfo<BaseEntity>[] = [
    { name: 'userEntity', dependency: new User() },
  ];
  dependencyInjector<BaseEntity>(entities);
  console.info('entities setting completed');
};
