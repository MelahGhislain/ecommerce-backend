import { format, createLogger, transports } from 'winston';
const { combine, timestamp, colorize, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${level} ${timestamp}: ${message}`;
});

const appLogger = () =>
  createLogger({
    level: 'info',
    format: combine(
      colorize(),
      timestamp({ format: 'HH:mm:ss' }),
      customFormat,
    ),
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      // new transports.File({ filename: 'combined.log' }),
      new transports.Console(),
    ],
  });

export default appLogger;
