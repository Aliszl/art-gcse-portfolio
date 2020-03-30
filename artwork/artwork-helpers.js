const db = require('../dbConfig');

module.exports = {
    getArt,
    getArtByArtistId, 
    getArtById,
    getArtByTheme 
  };

  function getArt() {
    return db('artwork').select('id', 'title','description','source_image', 'theme_id', 'artist_id');
  }

  function getArtByArtistId (artist_id) {
      // raw sql SELECT id, title, description,
      // theme_id, artist_id, 
      //source_image FROM `artwork`WHERE artist_id=1;
    return db('artwork')
    .where({artist_id})
    .select("id", "title", "description", "theme_id", "artist_id", "source_image");
  }

  function getArtById(id) {
    // raw sql SELECT id, title, description,
    // theme_id, artist_id,
    // source_image FROM `artwork` WHERE id=1;
  return db('artwork')
  .where("id", id)
  .select("id", "title", "description", "theme_id", "artist_id", "source_image");
}

function getArtByTheme(theme_id) {
    // raw sql SELECT id, title, description,
    // theme_id, artist_id,
    // source_image FROM `artwork`WHERE theme_id=1;
  return db('artwork')
  .where("theme_id", theme_id)
  .select("id", "title", "description", "theme_id", "artist_id", "source_image");
}

function getThemeByArtist(artist_id, theme_id) {
    // raw sql SELECT id, title, description,
    // theme_id, artist_id,
    // source_image FROM `artwork`WHERE theme_id=1;
  return db('artwork')
  .where("theme_id", theme_id)
  .select("id", "title", "description", "theme_id", "artist_id", "source_image");
}