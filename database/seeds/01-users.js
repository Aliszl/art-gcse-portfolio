const bcrypt = require('bcryptjs');
exports.seed = function(knex) {

  // Inserts seed entries
  return knex('users').insert([
    {firstname:'Ali', lastname:'Law',username: 'Alizl', password: bcrypt.hashSync('1234', 10), email:'alisparklaw@gmail.com'},
    {firstname:'Sam', lastname:'Law',username: 'sam', password: bcrypt.hashSync('4321', 10), email:'samuelfwlaw@gmail.com'}
  
  ]);

};
