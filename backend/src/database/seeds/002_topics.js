
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('topics').del()
    .then(() => 
      // Inserts seed entries
      knex('topics').insert([
        { 
          id: '80c2168a',
          name: 'Projeto my',
          user_id: 'e742b377'
        },
        { 
          id: 'e1048a89',
          name: 'Projeto my',
          user_id: 'e742b377'
        },
        { 
          id: 'f4455e45',
          name: 'Projeto my',
          user_id: '37eadd35'
        }
      ])
    );

