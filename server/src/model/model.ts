import { Inject } from 'typedi';
import { Connection, EntityTarget, ObjectLiteral, Repository } from 'typeorm';

class Model<Entity extends ObjectLiteral> {
  protected repository: Repository<Entity>;

  constructor(
    target: EntityTarget<Entity>,
    @Inject('connection') connection: Connection,
  ) {
    this.repository = connection.getRepository<Entity>(target);
  }
}

export default Model;
