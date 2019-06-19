const Joi = require('joi');

module.exports = {
  add: {
    body: {
      postId: Joi.string().hex().required(),
      description: Joi.string().required()
    }
  }
};
