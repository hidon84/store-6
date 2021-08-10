import { Container } from 'typedi';
import { createConnection } from 'typeorm';

const connect = async () => {
  const connection = await createConnection();
  Container.set('connection', connection);
  return connection;
};

export default connect;
