const { Router } = require('express');
const httpStatus = require('http-status');
const httpLogger = require('./middlewares/http_logger');
const errorHandler = require('./middlewares/error_handler');
const { partialRight } = require('ramda');
const { createRoute } = require('./../../utils/create_controller');

module.exports = ({ config, logger }) => {
  const apiRoutes = Router();

  const moderatorRoutes = createRoute('moderator-routes');
  apiRoutes.use('/moderator', moderatorRoutes);

  const uploaderRoutes = createRoute('uploader-routes');
  apiRoutes.use('/uploader', uploaderRoutes);

  const routes = Router();
  routes.use('/api', apiRoutes);
  routes.get('/', async (req, res) => {
    return res.json({
      code: 200,
      message: 'Welcome to Mode Squad POC',
    });
  });
  routes.get(['*'], async (req, res) => {
    let data = {
      code: 400,
      message: `Requested Route Not Found ${req.path}`,
    };
    return res.status(httpStatus.NOT_FOUND).json(data);
  });
  routes.use(httpLogger(logger));
  routes.use(partialRight(errorHandler, [logger, config]));
  return routes;
};
