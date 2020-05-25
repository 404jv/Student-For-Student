const knex = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(params = {}) {
  return jwt.sign({
    id: params.id,
  }, process.env.JWT_KEY, { expiresIn: 86400 });
}

module.exports = {
  async store(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await knex('users')
        .where({ email });
      
      const isUser = await bcrypt.compare(password, user[0].password);

      if (!isUser) 
        return res.status(401).send({ message: 'No user found with this credential' });
 
      
      return res.json({
        user: user[0],
        token: generateToken({ id: user[0].id }),
      });
    } catch (error) {
        next(error);
    }
  }
}