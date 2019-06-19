const User = require('../models/user.model');

module.exports.get = (req, res, next) => {
  const { userId } = req.params;
  User.findById(userId).then((data) => {
    res.json(data);
  }).catch((err) => {
    next(err);
  });
};

module.exports.list = (req, res, next) => {
  User.find().then((data) => {
    res.json(data);
  }).catch((err) => {
    next(err);
  });
};

module.exports.create = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    phone: req.body.phone
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
};

module.exports.update = (req, res, next) => {
  const { userId } = req.params;
  const updateParams = {
    email: req.body.email,
    username: req.body.username,
    fullname: req.body.fullname,
    phone: req.body.phone
  };

  User.findByIdAndUpdate({ _id: userId }, { $set: updateParams }, { new: true }, (err, doc) => {
    if (err) {
      next(err);
    }
    res.json(doc);
  });
};

module.exports.remove = (req, res, next) => {
  const { userId } = req.params;
  User.findByIdAndDelete(userId, (err, doc) => {
    if (err) {
      next(err);
    }
    res.json(doc);
  });
};
