const httpStatus = require('http-status');
const passport = require('passport');
const APIError = require('../helpers/APIError');
const User = require('../models/user.model');

module.exports.auth = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { 
      const err = new APIError(info.message, httpStatus.UNAUTHORIZED, true);
      next(err); 
    }
    req.login(user, loginErr => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.status(httpStatus.OK).json({ user: req.user });
    });  
  })(req, res, next);
}
// module.exports.login = async (req, res) => {
//   res.status(httpStatus.OK).json({ user: req.user });
// };

module.exports.refresh = async (req, res, next) => { 
  if(req.user) {
    const { _id } = req.user;
    const user = await User.findOne({ _id });
    if(user) {
      return res.status(httpStatus.OK).json({ user });
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
