
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users').del()
    .then(() => 
      // Inserts seed entries
      knex('users').insert([
        { 
          name: 'João Victor', 
          email: 'joao@gmail.com',
          password: '00123'
        },
        { 
          name: 'Robson', 
          email: 'robson@gmail.com',
          password: '00123'
        },
        { 
          name: 'Carls', 
          email: 'carls@gmail.com',
          password: '00123'
        }
      ])
    );

