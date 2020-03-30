const router = require("express").Router();
const helpers = require("./artwork-helpers");
// const restricted = require("../auth/restricted-middleware.js");

//   /api/artwork
 //Get all art
router.get("/", (req, res) => {
    helpers.getArt()
      .then(art => {
        res.json(art);
      })
      .catch(err => res.send(err));
  });
  router.get("/artist/:artist_id", async (req, res) => {
      try {
        const { artist_id }= req.params;
     
      const artPiece = await helpers.getArtByArtistId(artist_id);
      res.json(artPiece);
    } catch (err) {
      res.status(500).json({
        message: "Failed to get artwork for this artist"
      });
    }
  });
  router.get("/artist/:artist_id/:theme/:id", async (req, res) => {
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
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const artPiece = await helpers.getArtById(id);
      res.json(artPiece);
    } catch (err) {
      res.status(500).json({
        message: "Failed to get artwork for  id"
      });
    }
  });
 
  
  module.exports = router;