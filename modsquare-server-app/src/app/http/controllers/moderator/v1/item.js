const { Router } = require('express');
const path = require('path');
const itemForms = require(path.resolve('src/app/forms/item.form'));
const itemService = require(path.resolve('src/app/services/item'));
const itemMapper = require(path.resolve('src/app/mappers/item.mapper'));
const helper = require(path.resolve('src/app/helpers/index'));

module.exports = () => {
  const itemRoutes = Router();

  itemRoutes.get('', async (req, res) => {
    try {
      const page = req.query.page;
      const filter = req.query.filter;

      const result = await itemService.find(page, filter);
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
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  itemRoutes.get('/:item_id', async (req, res) => {
    try {
      const id = req.params.item_id;

      const result = await itemService.findById(id);
      const mappedItem = itemMapper.mapItem(result);

      return res
        .status(200)
        .send(helper.success(200, 'Item Retrieved Successfully.', mappedItem));
    } catch (error) {
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  itemRoutes.put('/verify/:item_id', async (req, res) => {
    try {
      const id = req.params.item_id;
      const status = req.body.status;

      const result = await itemService.verify(id, status);
      const mappedItem = itemMapper.mapItem(result);

      return res
        .status(200)
        .send(helper.success(200, 'Item Verified Successfully.', mappedItem));
    } catch (error) {
      const code = error.code ? error.code : 500;
      const mappedError = helper.error(code, error.message);

      return res.status(code).send(mappedError);
    }
  });

  return itemRoutes;
};
