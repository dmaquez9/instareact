const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const validation = require('../validations/comment.validation');
const controller = require('../controllers/comment.controller');
const config = require('../config/config');

const router = express.Router();

router.route('/')
  .post(validate(validation.add), expressJwt({ secret: config.jwtSecret }), controller.add);

router.route('/:commentId')
  .get(expressJwt({ secret: config.jwtSecret }), controller.get)
  .delete(expressJwt({ secret: config.jwtSecret }), controller.remove);

module.exports = router;