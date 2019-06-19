const express = require('express');
const validate = require('express-validation');
const expressJwt = require('express-jwt');
const validation = require('../validations/auth.validation');
const controller = require('../controllers/auth.controller');
const config = require('../config/config');

const router = express.Router();

router.route('/login')
  .post(validate(validation.login), controller.login);

router.route('/refresh-token')
  .get(expressJwt({ secret: config.jwtSecret }), controller.refresh);

router.route('/random-number')
  .get(expressJwt({ secret: config.jwtSecret }), controller.getRandomNumber);

module.exports = router;
