const { Router } = require('express');
const path = require('path');
const itemForms = require(path.resolve('src/app/forms/item.form'));
const itemService = require(path.resolve('src/app/services/item'));
const itemMapper = require(path.resolve('src/app/mappers/item.mapper'));
const helper = require(path.resolve('src/app/helpers/index'));
const container = require(path.resolve('src/container'));
const {logger} = container.cradle;

module.exports = () => {
  const itemRoutes = Router();

  itemRoutes.get('', async (req, res) => {
    try {
      const page = req.query.page;
      const filter = req.query.filter;

      const result = await itemService.findUploaderItems(page, filter);
      const mappedFeed = itemMapper.map(result.data);

      return res
        .status(200)
        .send(
          helper.success(
            200,
            'Items Retrieved Successfully.',
            mappedFeed,
            result.meta,
          ),
        );
    } catch (error) {
      logger.error(error);
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);
      return res.status(code).send(mappedError);
    }
  });

  itemRoutes.post('/image_item', async (req, res) => {
    try {
      const image = req.body.image;

      const result = await itemService.saveImage(image);
      const mappedItem = itemMapper.mapItem(result);

      return res
        .status(200)
        .send(helper.success(200, 'Item Submitted Successfully.', mappedItem));
    } catch (error) {
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  itemRoutes.post('/video_item', async (req, res) => {
    try {
      const video = req.body.video_item;

      const result = await itemService.saveVideo(video);
      const mappedItem = itemMapper.mapItem(result);

      return res
        .status(200)
        .send(helper.success(200, 'Item Submitted Successfully.', mappedItem));
    } catch (error) {
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  itemRoutes.post('/text_item', async (req, res) => {
    try {
      const text = req.body.text_item;

      const result = await itemService.saveText(text);
      const mappedItem = itemMapper.mapItem(result);

      return res
        .status(200)
        .send(helper.success(200, 'Item Submitted Successfully.', mappedItem));
    } catch (error) {
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  itemRoutes.post('/iframe_item', async (req, res) => {
    try {
      const iframe = req.body.iframe_item;

      const result = await itemService.saveIFrame(iframe);
      const mappedItem = itemMapper.mapItem(result);

      return res
        .status(200)
        .send(helper.success(200, 'Item Submitted Successfully.', mappedItem));
    } catch (error) {
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  return itemRoutes;
};
