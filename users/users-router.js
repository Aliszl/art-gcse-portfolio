const router = require("express").Router();
const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

//   /api/users

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);
    res.json(`${user.firstname} ${user.lastname}`);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get user for id"
    });
  }
});

module.exports = router;
