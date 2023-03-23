import { format, createLogger, transports } from 'winston';
const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${level} ${timestamp}: ${message}`;
});

const productionLogger = () =>
  createLogger({
    level: 'info',
    format: combine(timestamp(), customFormat),
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });

export default productionLogger;
