require('dotenv').load();

const fs = require('fs');
const path = require('path');

function loadDbConfig() {
  console.log(`DATABASE URI: ${process.env.dbURI}, StoragePath: ${process.env.STORAGE_PATH}`);
  return process.env.dbURI;
  'mongodb://localhost/modeSquadPocDevDB';
}

const ENV = process.env.NODE_ENV || 'development';
const dbConfig = loadDbConfig();
const appConfig = {
  port: process.env.port || 8080,
};
const config = Object.assign(
  {
    env: ENV,
    db: dbConfig,
    logging: {},
  },
  appConfig,
);

module.exports = config;
