import { Connection, ObjectLiteral } from 'typeorm';
import LoginEntity from '@/entity/login';
import LoginModel from '@/model/login';
import Model from '@/model/model';
import dependencyInjector, { DependencyInfo } from './dependencyInjector';
import UserEntity from '@/entity/user';
import UserModel from '@/model/user';

const modelInjector = (connection: Connection) => {
  const entities: DependencyInfo<Model<ObjectLiteral>>[] = [
    { name: 'loginModel', dependency: new LoginModel(LoginEntity, connection) },
    { name: 'userModel', dependency: new UserModel(UserEntity, connection) },
  ];

  dependencyInjector<Model<ObjectLiteral>>(entities);
};

export default modelInjector;
