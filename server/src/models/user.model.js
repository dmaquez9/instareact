const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email required!'],
    unique: [true, 'Email does exist!'],
    validate: [validator.isEmail, 'No valid email address provided.'],
  },
  username: {
    type: String,
    required: [true, 'Username required!'],
    unique: [true, 'Username does exist!']
  },
  password: {
    type: String,
    required: [true, 'Password required!'],
    minlength: 7,
    maxlength: 42
  },
  fullname: {
    type: String,
    required: [true, 'Fullname required!'],
  },
  phone: {
    type: String,
    required: [true, 'Phone required!'],
    validate: [validator.isMobilePhone, 'No valid phone provided.']
  },
  profilePic: {
    type: String,
    default: ''
  },
  privacyLevel: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'user'
  }
});

UserSchema.pre('save', async function() {
  this.password = await this.generatePasswordHash();
});

UserSchema.methods.generatePasswordHash = async function() {
  const saltRounds = 10;
  return await bcrypt.hash(this.password, saltRounds);
};

UserSchema.methods.validatePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
