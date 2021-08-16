process.env.NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  port: parseInt(process.env.PORT || '5000', 10),
  api: {
    prefix: '/api',
    version: process.env.API_VERSION || '0.0.0',
  },
  jwt: {
    algorithm: process.env.JWT_ALGORITHM || 'HS256',
    secret: process.env.JWT_SECRET || '',
    expire: {
      access: parseFloat(process.env.JWT_EXPIRE_ACCESS || '0'),
      refresh: parseFloat(process.env.JWT_EXPIRE_REFRESH || '0'),
    },
  },
  database: {
    redis: {
      connectionUrl: process.env.REDIS_URL,
      connectionTlsUrl: process.env.REDIS_TLS_URL,
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
    },
    mysql: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_NAME,
    },
  },
  s3: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PW,
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_BUCKET || '',
    maxSize: parseInt(process.env.AWS_MAX_SIZE || '1000000', 10),
  },
};
