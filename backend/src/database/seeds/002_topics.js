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
          user_id: '018f2b55'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Projeto my',
          user_id: '018f2b55'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          name: 'Projeto my',
          user_id: '7d6f3f35'
        }
      ])
    );

