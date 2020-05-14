const cypto = require('crypto');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('topics').del()
    .then(() => 
      // Inserts seed entries
      knex('topics').insert([
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Projeto my',
          user_id: 'e742b377'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Projeto my',
          user_id: 'e742b377'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Projeto my',
          user_id: '37eadd35'
        }
      ])
    );

