const knex = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await knex('users')
      .where({ email });
    
    const isUser = await bcrypt.compare(password, user[0].password);

    if (!isUser) 
      return res.status(401).send({ message: 'No user found with this credential' });

    const { id, name } = await user;
    const token = jwt.sign({
      id,
      name,
      email
    }, process.env.JWT_KEY, { expiresIn: '75h' });

    return res.json({ token: token });
  }
}