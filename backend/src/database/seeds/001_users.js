const cypto = require('crypto');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users').del()
    .then(() => 
      // Inserts seed entries
      knex('users').insert([
        { 
          id: 'e742b377',
          name: 'João Victor', 
          email: 'joao@gmail.com',
          password: '00123'
        },
        { 
          id: '3f80473a',
          name: 'Robson', 
          email: 'robson@gmail.com',
          password: '00123'
        },
        { 
          id: '37eadd35',
          name: 'Carls', 
          email: 'carls@gmail.com',
          password: '00123'
        }
      ])
    );

