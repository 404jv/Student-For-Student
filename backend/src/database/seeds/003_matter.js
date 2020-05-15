const cypto = require('crypto');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('matter').del()
    .then(() => 
      // Inserts seed entries
      knex('matter').insert([
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          title: 'My Matter',
          resume: 'My resume',
          tags: '#study',
          topic_id: '80c2168a'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          title: 'My Matter',
          resume: 'My resume',
          tags: '#study',
          topic_id: 'e1048a89'
        },
        { 
          id: cypto.randomBytes(4).toString('HEX'),
          title: 'My Matter',
          resume: 'My resume',
          topic_id: 'f4455e45'
        }
      ])
    );

