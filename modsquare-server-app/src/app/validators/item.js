const Joi = require('joi');

module.exports = Joi.object().keys({
  item_id: Joi.string().optional(),
});
