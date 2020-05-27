require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (params = {}) => {
  return jwt.sign({
    id: params.id,
    name: params.name,
    email: params.email,
  }, process.env.JWT_KEY);
}
