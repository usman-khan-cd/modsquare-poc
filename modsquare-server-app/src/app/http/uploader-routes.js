const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const container = require(path.resolve('src/container'));
const {logger} = container.cradle;
const { uploaderController, middleware } = require(path.resolve(
  'src/utils/create_controller',
));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    console.log("Storage Path", process.env.STORAGE_PATH);
    cb(null, process.env.STORAGE_PATH);
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports = () => {
  const router = Router();
  // const signupRoutes = uploaderController('v1/signup');
  // router.use('/signup', signupRoutes);
  // const loginRoutes = uploaderController('v1/login');
  // router.use('/login', loginRoutes);

  router.use(upload.single('image_item'), middleware('uploader_middleware'));
  router.use('/items', uploaderController('v1/item'));

  const uploaderV1Routes = Router();
  uploaderV1Routes.use('/v1', router);
  return uploaderV1Routes;
};
