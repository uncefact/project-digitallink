import dotenv from 'dotenv';

dotenv.config({});

export const config = {
  port: process.env.PORT || '3000',
  nodeEnv: process.env.NODE_ENV || 'dev',

  dbType: process.env.DB_TYPE || 'postgres',
  dbHost: process.env.DB_HOST || '127.0.0.1',
  dbName: process.env.DB_NAME || 'digitallink',
  dbPort: process.env.DB_PORT || '5432',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
};