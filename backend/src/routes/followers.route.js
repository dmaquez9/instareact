const express = require('express');
const controller = require('../controllers/followers.controller');

const router = express.Router();

router.route('/:userId')
  .get(controller.get);

module.exports = router;
