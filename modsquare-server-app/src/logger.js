const fs = require('fs')
const winston = require('winston')

if (!fs.existsSync(`logs`)) {
  fs.mkdirSync(`logs`)
}

const logFileSize = 1024*5*1024;
module.exports = ({ config }) => {
  const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: `logs/${config.env}-error.log`, level: 'error', maxsize: logFileSize }),
      new winston.transports.File({ filename: `logs/${config.env}.log`, level: 'debug', maxsize: logFileSize})
    ]
  });
  return logger;
}
