const db = require('../dbConfig');

module.exports = {

    find   
  };

  function find() {
    return db('artwork').select('id', 'title','description','source_image', 'theme_id', 'artist_id');
  }