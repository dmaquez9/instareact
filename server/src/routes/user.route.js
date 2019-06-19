const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/user.controller');
const validation = require('../validations/user.validation');

const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(validate(validation.create), controller.create);

router.route('/:userId')
  .get(controller.get)
  .put(validate(validation.update), controller.update)
  .delete(controller.remove);

module.exports = router;
