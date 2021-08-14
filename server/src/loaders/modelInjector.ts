import { Connection, ObjectLiteral } from 'typeorm';
import LoginEntity from '@/entity/login';
import LoginModel from '@/model/login';
import Model from '@/model/model';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';

const modelInjector = (connection: Connection) => {
  const entities: DependencyInfo<Model<ObjectLiteral>>[] = [
    { name: 'loginModel', dependency: new LoginModel(LoginEntity, connection) },
  ];

  dependencyInjector<Model<ObjectLiteral>>(entities);
};

export default modelInjector;
