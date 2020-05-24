const knex = require('../database');
const crypto = require('crypto')
const bcrypt = require('bcrypt');

module.exports = {
  async index(req, res) {

    const users = await knex('users');

    return res.json(users);
  },

  async store(req, res, next) {
    try {
      const { name, email } = req.body;
      const password = await bcrypt.hash(req.body.password, 10);

      await knex('users').insert({
        id: crypto.randomBytes(4).toString('HEX'),
        email,
        name,
        password
      });

      return res.status(201).send();
    } catch (error) {
        next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const user = await knex('users').where({ id });

      if (user.length === 0) {
        return res.status(404).send();
      }

      const { name, email } = req.body;
      const password = await bcrypt.hash(req.body.password, 10);
      

      await knex('users')
        .update({
          name,
          email,
          password
        })
        .where({ id });

      return res.send();
    } catch (error) {
        next(error);
    }
  },

  async destroy(req, res, next) {
    try {
      const { id } = req.params;

      const user = await knex('users').where({ id });

      if (user.length === 0) {
        return res.status(404).send();
      }

      await knex('users')
        .del()
        .where({ id });
      
      return res.send();
    } catch (error) {
        next(error);
    }
  }
}