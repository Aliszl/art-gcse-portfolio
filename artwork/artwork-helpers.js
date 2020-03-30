const db = require('../dbConfig');

module.exports = {
    getAllArt,
    getArtByArtistId, 
    getArtById,
    getArtByTheme,
    getThemeByArtist,
    addArt,
    removeArt,
    updateArt
  };
 //Get all art
  function getAllArt() {
    return db('artwork').select('id', 'title','description','source_image', 'theme_id', 'artist_id');
  }

   //Post new art
   //raw sql: INSERT INTO `artwork`(title, description,theme_id,artist_id,source_image)
//VALUES('test','test',3,1,'https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/cambike.jpg');

   function addArt(artPiece) {
    return db('artwork')
    .insert(artPiece)
    .then(ids=> {
        return getArtById(ids[0]);
      });
  }


  
      //get by id
  function getArtById(id) {
    // raw sql SELECT id, title, description,
    // theme_id, artist_id,
    // source_image FROM `artwork` WHERE id=1;
  return db('artwork')
  .where("id", id)
  .select("id", "title", "description", "theme_id", "artist_id", "source_image");
}

  // DELETE FROM `artwork` WHERE id=8;
  function removeArt(id) {
    return db('artwork')
      .where('id', id)
      .del();
  }

//Update

function updateArt(id, change){
    return db('artwork')
      .where({ id })
      .update(change)
  }

//get by artist
  function getArtByArtistId (artist_id) {
      // raw sql SELECT id, title, description,
      // theme_id, artist_id, 
      //source_image FROM `artwork`WHERE artist_id=1;
    return db('artwork')
    .where({artist_id})
    .select("id", "title", "description", "theme_id", "artist_id", "source_image");
  }


  // get by theme
function getArtByTheme(theme_id) {
    // raw sql SELECT id, title, description,
    // theme_id, artist_id,
    // source_image FROM `artwork`WHERE theme_id=1;
  return db('artwork')
  .where({theme_id })
  .select("id", "title", "description", "theme_id", "artist_id", "source_image");
}

function getThemeByArtist(artist_id, theme_id) {
    // RAW SQL SELECT id, title, description, theme_id, 
    // artist_id, source_image
    // FROM `artwork`
    // WHERE artist_id=1
    // AND theme_id=1;
  return db('artwork')
  .where({artist_id })
  .andWhere({theme_id})
  .select("id", "title", "description", "theme_id", "artist_id", "source_image");
}