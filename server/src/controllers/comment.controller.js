const Comment = require('../models/comment.model');

module.exports.add = (req, res, next) => {
  const comment = new Comment({
    userId: req.user.id,
    postId: req.body.postId,
    description: req.body.description
  });

  comment.save()
    .then(savedComment => res.json(savedComment))
    .catch(e => next(e));
};

module.exports.get = (req, res, next) => {
  const { commentId } = req.params;
  Comment.findById(commentId).then((data) => {
    res.json(data);
  }).catch((err) => {
    next(err);
  });
};

module.exports.remove = (req, res, next) => {
  const { commentId } = req.params;
  Comment.findOneAndDelete({ _id: commentId, userId: req.user.id }, (err, doc) => {
    if (err) {
      next(err);
    }
    res.json(doc);
  });
};
