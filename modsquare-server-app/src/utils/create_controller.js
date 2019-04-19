const path = require('path');
/**
 *
 *
 */
module.exports = (() => {
  const uploaderController = controllerUri => {
    return privateController('uploader', controllerUri);
  };
  const moderatorController = controllerUri => {
    return privateController('moderator', controllerUri);
  };

  const privateController = (type, controllerUri) => {
    const controllerPath = path.resolve(
      `src/app/http/controllers/${type}`,
      controllerUri,
    );
    const Controller = require(controllerPath);
    return Controller();
  };

  return {
    uploaderController,
    moderatorController,
    createRoute: routeUri => {
      const controllerPath = path.resolve(`src/app/http/`, routeUri);
      const _appRoute = require(controllerPath);
      return _appRoute();
    },
    middleware: routeUri => {
      const controllerPath = path.resolve(`src/app/http/middlewares`, routeUri);
      const _appRoute = require(controllerPath);
      return _appRoute();
    },
  };
})();
