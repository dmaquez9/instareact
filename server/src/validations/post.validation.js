const Joi = require('joi');

module.exports = {
  add: {
    body: {
      description: Joi.string().required()
    }
  },
  update: {
    body: {
      description: Joi.string().required()
    },
    params: {
      postId: Joi.string().hex().required()
    }
  },
};