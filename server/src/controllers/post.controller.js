const Post = require('../models/post.model');

module.exports.add = (req, res, next) => {
  const post = new Post({
    userId: req.user.id,
    description: req.body.description
  });

  post.save()
    .then(savedPost => res.json(savedPost))
    .catch(e => next(e));
};

module.exports.get = (req, res, next) => {
  const { postId } = req.params;
  Post.findById(postId).then((data) => {
    res.json(data);
  }).catch((err) => {
    next(err);
  });
};

module.exports.update = (req, res, next) => {
  const { postId } = req.params;
  const updateParams = {
    description: req.body.description
  };

  Post.findOneAndUpdate(
    { _id: postId, userId: req.user.id },
    { $set: updateParams },
    { new: true },
    (err, doc) => {
      if (err) {
        next(err);
      }
      res.json(doc);
    }
  );
};

module.exports.remove = (req, res, next) => {
  const { postId } = req.params;
  Post.findOneAndDelete({ _id: postId, userId: req.user.id }, (err, doc) => {
    if (err) {
      next(err);
    }
    res.json(doc);
  });
};
