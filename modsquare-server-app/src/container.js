const { createContainer, asValue, asFunction } = require('awilix')

const logger = require('./logger');
const config = require('./config');
const server = require('./server');
const appRoutes = require('./app/http/routes');

const container = createContainer();
// SYSTEM
container
  .register({
    logger: asFunction(logger).singleton(),
    config: asValue(config),
    server: asFunction(server).singleton(),
    appRoutes: asFunction(appRoutes).singleton(),
  })

module.exports = container;
