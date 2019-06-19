const express = require('express');
const expressJwt = require('express-jwt');
const controller = require('../controllers/followers.controller');
const config = require('../config/config');

const router = express.Router();

router.route('/:userId')
  .get(expressJwt({ secret: config.jwtSecret }), controller.get);

module.exports = router;