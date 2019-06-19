const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    maxlength: 300
  }
});

module.exports = mongoose.model('Post', PostSchema);
