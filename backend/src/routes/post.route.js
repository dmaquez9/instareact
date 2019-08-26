const express = require('express');
const validate = require('express-validation');
const validation = require('../validations/post.validation');
const controller = require('../controllers/post.controller');

const router = express.Router();

router.route('/')
  .post(validate(validation.add), controller.add);

router.route('/:postId')
  .get(controller.get)
  .put(validate(validation.update), controller.update)
  .delete(controller.remove);

module.exports = router;
