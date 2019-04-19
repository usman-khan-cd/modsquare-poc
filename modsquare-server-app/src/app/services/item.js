const path = require('path');
// const Joi = require('joi');
// const itemValidator = require(path.resolve('src/app/validators/item'));
const CustomError = require(path.resolve('src/app/custom-errors/custom-error'));
const Item = require(path.resolve('src/app/models/item'));
const User = require(path.resolve('src/app/models/user'));
const container = require(path.resolve('src/container'));
const {logger} = container.cradle;

const find = async (pageNumber, filterQuery) => {
  let result = { data: {}, meta: {} };
  try {
    const page = pageNumber ? pageNumber : 1;
    const filter = filterQuery ? { status: filterQuery } : {};
    const pageSize = 10;
    const offset = page * pageSize - 10;
    const options = {
      offset: offset,
      limit: pageSize,
      sort: '-create_date',
      populate: 'user',
    };

    const items = await Item.paginate(filter, options);
    const totalPages = Math.ceil(items.total / pageSize);
    const currentPage = parseInt(page, 10);
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    result.data = items.docs;
    result.meta = {
      currentPage,
      nextPage,
      pageSize,
      totalPages,
    };

    return Promise.resolve(result);
  } catch (error) {
    if (error) return Promise.reject(error);
  }
};

const findUploaderItems = async (pageNumber, filterQuery) => {
  let result = { data: {}, meta: {} };
  try {
    await checkUser();
    const page = pageNumber ? pageNumber : 1;
    const filter = filterQuery
      ? { status: filterQuery, user: '5cac2bffa423030cd4d7ec9a' }
      : { user: '5cac2bffa423030cd4d7ec9a' };
    const pageSize = 10;
    const offset = page * pageSize - 10;
    const options = {
      offset: offset,
      limit: pageSize,
      sort: '-create_date',
      populate: 'user',
    };

    const items = await Item.paginate(filter, options);
    const totalPages = Math.ceil(items.total / pageSize);
    const currentPage = parseInt(page, 10);
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    result.data = items.docs;
    result.meta = {
      currentPage,
      nextPage,
      pageSize,
      totalPages,
    };

    return Promise.resolve(result);
  } catch (error) {
    logger.error(error);
    if (error) return Promise.reject(error);
  }
};

const findById = async id => {
  try {
    const item = await Item.findById(id).populate('user');

    if (!item) {
      throw new CustomError('Item not Found.', 404);
    }

    return Promise.resolve(item);
  } catch (error) {
    if (error) return Promise.reject(error);
  }
};

const verify = async (id, status) => {
  try {
    if (!status) {
      throw new CustomError('Item Status is Missing.', 400);
    }

    let item = await Item.findById(id);

    if (!item) {
      throw new CustomError('Item not Found.', 404);
    }

    item.status = status;
    item = await item.save();
    await item.populate('user').execPopulate();

    return Promise.resolve(item);
  } catch (error) {
    if (error) return Promise.reject(error);
  }
};

const saveImage = async image => {
  try {
    if (!image) {
      throw new CustomError('Item Image is Missing.', 400);
    }
    await checkUser('5cac2bffa423030cd4d7ec9a');
    let item = new Item();
    item.image = image;
    item.status = 'pending';
    item.type = 'image';
    item.user = '5cac2bffa423030cd4d7ec9a';

    item = await item.save();
    await item.populate('user').execPopulate();

    return Promise.resolve(item);
  } catch (error) {
    if (error) return Promise.reject(error);
  }
};

const saveVideo = async video => {
  try {
    if (!video) {
      throw new CustomError('Item Video is Missing.', 400);
    }

    if (video === '') {
      throw new CustomError('Item Video is Empty.', 400);
    }
    await checkUser('5cac2bffa423030cd4d7ec9a');

    let item = new Item();
    item.video = video;
    item.status = 'pending';
    item.type = 'video';
    item.user = '5cac2bffa423030cd4d7ec9a';

    item = await item.save();
    await item.populate('user').execPopulate();

    return Promise.resolve(item);
  } catch (error) {
    if (error) return Promise.reject(error);
  }
};

const saveText = async text => {
  try {
    if (!text) {
      throw new CustomError('Item Content is Missing.', 400);
    }

    if (text === '') {
      throw new CustomError('Item Content is Empty.', 400);
    }

    await checkUser('5cac2bffa423030cd4d7ec9a');
    let item = new Item();
    item.text = text;
    item.status = 'pending';
    item.type = 'content';
    item.user = '5cac2bffa423030cd4d7ec9a';

    item = await item.save();
    await item.populate('user').execPopulate();

    return Promise.resolve(item);
  } catch (error) {
    logger.error(error);
    if (error) return Promise.reject(error);
  }
};

const checkUser = async( ) => {
  return new Promise( async(resolve, reject) => {
    const _id = "5cac2bffa423030cd4d7ec9a";
    let user = await User.findById(_id);
    if(!user){
      user = new User();
      user._id = _id;
      user.first_name = 'Jhon';
      user.last_name = 'Doe';
      user.email = 'submittor@mailnator.com';
      user.role = 'uploader';
      user.password = 'abc123';
      await user.save();
    }
    resolve(user);
  });
}

const saveIFrame = async iframe => {
  try {
    if (!iframe) {
      throw new CustomError('Item IFrame is Missing.', 400);
    }

    if (iframe === '') {
      throw new CustomError('Item IFrame is Empty.', 400);
    }

    await checkUser('5cac2bffa423030cd4d7ec9a');
    let item = new Item();
    item.iframe = iframe;
    item.status = 'pending';
    item.type = 'iframe';
    item.user = '5cac2bffa423030cd4d7ec9a';

    item = await item.save();
    await item.populate('user').execPopulate();

    return Promise.resolve(item);
  } catch (error) {
    if (error) return Promise.reject(error);
  }
};

module.exports = {
  find,
  findUploaderItems,
  findById,
  verify,
  saveImage,
  saveVideo,
  saveText,
  saveIFrame,
};
