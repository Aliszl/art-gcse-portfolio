const router = require("express").Router();
const helpers = require("./artwork-helpers");
// const restricted = require("../auth/restricted-middleware.js");

//   /api/artwork
 //Get all art
router.get("/", (req, res) => {
    helpers.getAllArt()
      .then(art => {
        res.json(art);
      })
      .catch(err => res.send(err));
  });
    //get by id
    router.get("/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const artPiece = await helpers.getArtById(id);
          res.json(artPiece);
        } catch (err) {
          res.status(500).json({
            message: "Failed to get artwork for id"
          });
        }
      });
  //get by artist
  router.get("/artist/:artist_id", async (req, res) => {
      try {
        const { artist_id }= req.params;
     
      const artistsWork = await helpers.getArtByArtistId(artist_id);
      res.json(artistsWork);
    } catch (err) {
      res.status(500).json({
        message: "Failed to get artwork for this artist"
      });
    }
  });

  // get by theme
  router.get("/theme/:theme_id", async (req, res) => {
    try {
      const { theme_id }= req.params;
   
    const theme = await helpers.getArtByTheme(theme_id);
    res.json(theme);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get artwork by this theme"
    });
  }
});

  //get by artist and theme
  router.get("/artist/:artist_id/:theme_id", async (req, res) => {
    try {
    //   const { artistId }= req.params;
      const artPiece = await helpers.getArtByTheme('artist_id');
      res.json(artPiece);
    } catch (err) {
      res.status(500).json({
        message: "Failed to get artwork for this artist"
      });
    }
  });

 
  
  module.exports = router;