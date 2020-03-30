const router = require("express").Router();
const helpers = require("./artwork-helpers");
// const restricted = require("../auth/restricted-middleware.js");

//   /api/artwork

router.get("/", (req, res) => {
    helpers.find()
      .then(art => {
        res.json(art);
      })
      .catch(err => res.send(err));
  });
  
  module.exports = router;