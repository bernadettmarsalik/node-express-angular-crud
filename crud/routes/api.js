var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello from API page");
});

/* GET entity with id */
// pld:  /users/5    => server visszaadja a users tömbből az 5-ös id-jú adatot
router.get("/:entity/:id", function (req, res, next) {
  res.send("Hello from API page");
});

/* GET entity  */
// Server visszaadja az összes felhasználót
router.get("/:entity", function (req, res, next) {
  res.send("Hello from API page");
});

module.exports = router;
