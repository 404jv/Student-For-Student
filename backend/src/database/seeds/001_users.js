const cypto = require('crypto');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users').del()
    .then(() => 
      // Inserts seed entries
      knex('users').insert([
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'João Victor', 
          email: 'joao@gmail.com',
          password: '00123'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Robson', 
          email: 'robson@gmail.com',
          password: '00123'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Carls', 
          email: 'carls@gmail.com',
          password: '00123'
        }
      ])
    );

