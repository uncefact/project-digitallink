import './global';
import express, { json } from 'express';
import cors from 'cors';
import router from './routes';
import { config } from './config';
import { requestLogger, errorHandler, notFoundHandler } from './utils';
import { AppDataSource } from './data-source';

export const app = express();

app.use(cors());
app.use(requestLogger);
app.use(json());
app.use(router);
app.use(notFoundHandler);
app.use(errorHandler);

try {
  app.listen(config.port, async () => {
    await AppDataSource.initialize();
    log.info(`Server connected to database!`);
    log.info(`Server is running on port ${config.port}`);
  });
} catch (error) {
  log.error(error);
  process.exit(1);
}
