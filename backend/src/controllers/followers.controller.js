const httpStatus = require('http-status');
const Followers = require('../models/followers.model');

module.exports.get = async (req, res, next) => {
  const followers = await Followers.find({ userId: req.param.userId });
  res.json(followers);
};
