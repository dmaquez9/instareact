const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const APIError = require('../helpers/APIError');

const { jwtSecret, jwtExpiration } = require('../config/config');

const options = {
  expiresIn: jwtExpiration || '14d',
};

const generateAuthToken = (payload) => {
  try {
    const token = jwt.sign(payload, jwtSecret, options);
    return token;
  } catch (error) {
    const apiError = new APIError({
      message: error ? error.message : 'Unauthorized',
      status: httpStatus.UNAUTHORIZED,
      stack: error ? error.stack : undefined,
    });
    return apiError;
  }
};

const decode = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (error) {
    const apiError = new APIError({
      message: error ? error.message : 'Unauthorized',
      status: httpStatus.UNAUTHORIZED,
      stack: error ? error.stack : undefined,
    });
    return apiError;
  }
};

module.exports = {
  generateAuthToken,
  decode
};
