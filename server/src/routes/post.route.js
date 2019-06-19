const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const validation = require('../validations/post.validation');
const controller = require('../controllers/post.controller');
const config = require('../config/config');

const router = express.Router();

router.route('/')
  .post(validate(validation.add), expressJwt({ secret: config.jwtSecret }), controller.add);

router.route('/:postId')
  .get(expressJwt({ secret: config.jwtSecret }), controller.get)
  .put(expressJwt({ secret: config.jwtSecret }), validate(validation.update), controller.update)
  .delete(expressJwt({ secret: config.jwtSecret }), controller.remove);

module.exports = router;
