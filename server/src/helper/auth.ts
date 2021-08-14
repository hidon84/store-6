import { promisify } from 'util';
import { RedisClient } from 'redis';
import Container from 'typedi';
import config from '@/config';

export const storeRefreshToken = (refresh: string, idx: number) => {
  const redisClient = Container.get<RedisClient>('redisClient');
  const setexAsync = promisify(redisClient.setex).bind(redisClient);
  return setexAsync(
    refresh,
    60 * 60 * config.jwt.expire.refresh,
    idx.toString(),
  );
};

export const deleteRefreshToken = (refresh: string) => {
  const redisClient = Container.get<RedisClient>('redisClient');
  const delAsync = promisify(redisClient.del).bind(redisClient);
  return delAsync(refresh);
};
