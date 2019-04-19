const { Router } = require('express');
const path = require('path');

module.exports = () => {
  const middleware = Router();

  middleware.use(async (req, res, next) => {
    next();
  });
  return middleware;
};
