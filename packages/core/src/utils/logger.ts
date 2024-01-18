import winston, { Logger } from 'winston';
import expressWinston from 'express-winston';

export const requestLogger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  msg: 'HTTP {{req.method}} {{req.url}}',
  meta: false,
  expressFormat: true,
  colorize: true,
});

export const logger: Logger = winston.createLogger({
  exitOnError: false,
  levels: {
    debug: 4,
    info: 3,
    silly: 2,
    warn: 1,
    error: 0,
  },
  format: winston.format.combine(
    winston.format.printf((info) => {
      const splat = info[Symbol.for('splat')];
      if (splat) {
        // const meta = util.inspect(splat[0], false, null);
        return `[${info.level}] ${info.message} - meta: ${JSON.stringify(splat[0])}`;
      }
      return `[${info.level}] ${info.message} `;
    }),
  ),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      stderrLevels: ['error', 'warning'],
    }),
  ],
});
