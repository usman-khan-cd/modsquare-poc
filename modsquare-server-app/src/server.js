const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

module.exports = ({ logger, config, appRoutes }) => {
  const server = new express();
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cors());
  server.use(compression());
  server.use('/storage', express.static('storage'));
  server.use(appRoutes);
  logger.info("Database Configurations:: ", config.db, process.env.dbURI);
  logger.info("Storage Path", process.env.STORAGE_PATH);
  mongoose.connect(config.db, {
    useNewUrlParser: true,
  });
  const db = mongoose.connection;

  return {
    server,
    start: () =>
      new Promise(resolve => {
        const http = server.listen(config.port, () => {
          const { port } = http.address();
          logger.info(`API - Mode Squad POC App - Port ${port}`);
        });
      }),
  };
};
