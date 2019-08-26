const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const User = require('../models/user.model');

module.exports.login = async (req, res) => {
  res.status(httpStatus.OK).json({ user: req.user });
};

module.exports.refresh = async (req, res, next) => { 
  if(req.user) {
    const { _id } = req.user;
    const user = await User.findOne({ _id });
    if(user) {
      res.status(httpStatus.OK).json({ user });
      return;
    }
  }
  const err = new APIError('Please, login!', httpStatus.UNAUTHORIZED, true);
  return next(err);
};

module.exports.getRandomNumber = (req, res) => { 
  // req.user is assigned by jwt middleware if valid token is provided
  res.json({
    user: req.user,
    num: Math.random() * 100
  })
};
