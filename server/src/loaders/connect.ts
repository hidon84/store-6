import redis from 'redis';
import { Container } from 'typedi';
import { createConnection } from 'typeorm';
import config from '@/config';

const connect = async () => {
  const connection = await createConnection();
  Container.set('connection', connection);

  const redisClient = redis.createClient({
    host: config.database.redis.host,
    port: config.database.redis.port,
  });
  Container.set('redisClient', redisClient);

  return {
    connection,
    redisClient,
  };
};

export default connect;
