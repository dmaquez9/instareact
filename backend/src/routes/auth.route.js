const express = require('express');
const validate = require('express-validation');
const validation = require('../validations/auth.validation');
const controller = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login')
  .post(validate(validation.login), controller.auth);

router.route('/me')
  .get(controller.refresh);

router.route('/random-number')
  .get(controller.getRandomNumber);

module.exports = router;
