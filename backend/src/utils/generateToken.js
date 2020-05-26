require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (params = {}) => {
  return jwt.sign({
    id: params.id,
  }, process.env.JWT_KEY);
}
