
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model')

passport.use(new LocalStrategy(
  async (username, password, done) => {
    const user = await User.findOne({ username });
    if (!user) {
      return done(null, false, { message: 'No user found.' });
    }
    const isValid = await user.validatePassword(password);
    if (isValid) {
      return done(null, user);
    }
    return done(null, false, { message: 'Invalid password' });
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  if (!user) {
    return done(null, false, { message: 'User not found' });
  }
  return done(null, user);
});

module.exports = passport;
