const httpStatus = require('http-status');
const jwt = require('../helpers/jwt');
const APIError = require('../helpers/APIError');
const User = require('../models/user.model');

module.exports.login = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if(!user) {
    const err = new APIError('No user found with this login credentials.', httpStatus.UNAUTHORIZED, true);
    return next(err);
  }
  const isValid = await user.validatePassword(req.body.password);

  if (!isValid) {
    const err = new APIError('Invalid Password', httpStatus.UNAUTHORIZED, true);
    return next(err);
  }

  const token = jwt.generateAuthToken({ 
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role
  });
  res.json({ token, user });
};

module.exports.refresh = async (req, res) => { 
  const user = await User.findOne({ _id: req.user.id });

  if(!user) {
    const err = new APIError('No user found', httpStatus.UNAUTHORIZED, true);
    return next(err);
  }

  const token = jwt.generateAuthToken({ 
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role
  });

  res.json({ token, user });
};

module.exports.getRandomNumber = (req, res) => { 
  // req.user is assigned by jwt middleware if valid token is provided
  res.json({
    user: req.user,
    num: Math.random() * 100
  })
};
