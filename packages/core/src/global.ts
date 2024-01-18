import { Logger } from 'winston';
import { logger } from './utils';

declare global {
  var log: Logger;
}

global.log = logger;

export default global;
