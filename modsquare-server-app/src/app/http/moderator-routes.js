const { Router } = require('express');
const path = require('path');
const container = require(path.resolve('src/container'));
const httpStatus = require('http-status');
const dotenv = require('dotenv');
const {
  moderatorController,
  middleware,
} = require('../../utils/create_controller');
/**
 *
 */
module.exports = () => {
  const { logger } = container.cradle;

  const router = Router();
  // const signupRoutes = moderatorController('v1/signup');
  // router.use('/signup', signupRoutes);
  // const loginRoutes = moderatorController('v1/login');
  // router.use('/login', loginRoutes);

  // router.use(middleware('moderator_middleware'));
  router.use('/items', moderatorController('v1/item'));

  router.get('', async (req, res) => {
    return res
      .status(200)
      .json({ code: 200, message: 'Working Moderator Routes' });
  });

  const v1Routes = Router();
  v1Routes.use('/v1', router);
  return v1Routes;
};
