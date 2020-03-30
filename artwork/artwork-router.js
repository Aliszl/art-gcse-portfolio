const router = require("express").Router();
const helpers = require("./artwork-helpers");
const restricted = require("../auth/restricted-middleware.js");

//   /api/artwork
 //Get all art
router.get("/",(req, res) => {
    helpers.getAllArt()
      .then(art => {
        res.json(art);
      })
      .catch(err => res.send(err));
  });

  //POST new art
  router.post("/",restricted,  async (req, res) => {
    const payload = req.body;
    helpers
      .addArt(payload)
      .then(artPiece => {
        if (!artPiece) {
          res
            .staus(400)
            .json({
              errorMessage: "Please provide a new piece"
            });
        } else {
          res.status(201).json(payload);
        }
      })
      .catch(error => {
        console.log(error);
        res.end();
        res.status(500).json({
          error: "could not add new art"
        });
      });
  });
  
    //get by id
    router.get("/:id", restricted, async (req, res) => {
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

      //DELETE
  router.delete('/:id', restricted, async(req, res) => {
    const { id } = req.params;
    const deletedArt =[];
  
    helpers.getArtById(id).then(post =>{
      deletedArt.push(post);
      res.status(200).json(post);
    })
  
    helpers
      .removeArt(id)
      .then(artPiece => {
        if (!artPiece) {
          res
            .status(404)
            .json({ message: "The art piece with the specified ID does not exist." });
        } else {
          res.status(204).json({ message: "Removed" });
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  //Update
  router.put('/:id',restricted,  async (req, res) => {
    try {
      const { id } = req.params;
      const artPiece = await helpers.getArtById(id);
      if (artPiece) {
        await helpers.updateArt(id, req.body);
        res.status(200).json(req.body);
      } else {
        res.status(404).json({ error: 'This Art Piece does not exist' });
      }
    }catch (error) {
        res.status(500).json({ error: 'error' });
      }
  }) 

  //get by artist
  router.get("/artist/:artist_id",restricted,  async (req, res) => {
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
      const { artist_id, theme_id }= req.params;
      const artistTheme = await helpers.getThemeByArtist(artist_id, theme_id);
      res.json(artistTheme);
    } catch (err) {
      res.status(500).json({
        message: "Failed to get artwork for this artist"
      });
    }
  });

 
  
  module.exports = router;