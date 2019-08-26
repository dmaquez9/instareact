const express = require('express');
const validate = require('express-validation');
const validation = require('../validations/comment.validation');
const controller = require('../controllers/comment.controller');

const router = express.Router();

router.route('/')
  .post(validate(validation.add), controller.add);

router.route('/:commentId')
  .get(controller.get)
  .delete(controller.remove);

module.exports = router;
