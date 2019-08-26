const Joi = require('joi');

module.exports = {
  // POST /api/users
  create: {
    body: {
      email: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      fullname: Joi.string().required(),
      phone: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  update: {
    body: {
      email: Joi.string().required(),
      username: Joi.string().required(),
      fullname: Joi.string().required(),
      phone: Joi.string().required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },
};
