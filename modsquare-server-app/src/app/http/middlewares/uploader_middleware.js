const { Router } = require('express');
const path = require('path');
const fileService = require(path.resolve('src/app/services/file/upload'));

module.exports = () => {
  const middleware = Router();

  middleware.use(async (req, res, next) => {
    if (req.file) {
      const file = await fileService.upload(req.file);
      req.body.image = file;
    }
    next();
  });
  return middleware;
};
