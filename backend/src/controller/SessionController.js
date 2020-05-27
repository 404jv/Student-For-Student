const knex = require('../database');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');


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
        token: generateToken({ 
          id: user[0].id,
          name: user[0].name,
          email: user[0].email,
        }),
      });
    } catch (error) {
        next(error);
    }
  }
}
