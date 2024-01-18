import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './config';
import { Entities } from './entity';
import { migrations } from './migrations';

const dbUrlConnection = `${config.dbType}://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export const AppDataSource = new DataSource({
  type: config.dbType,
  url: dbUrlConnection,
  synchronize: config.nodeEnv === 'production' ? true : false,
  logging: config.nodeEnv === 'production' ? true : false,
  entities: Entities,
  migrations,
} as DataSourceOptions);
