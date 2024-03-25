var express = require("express");
var router = express.Router();
const DB = require("../module/db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello from API page");
});

/* GET entity with id */
// pld:  /users/5    => Szerver visszaadja a users tömbből az 5-ös id-jú adatot
//itt a paraméter id mert a : után id van. A params objektumban van benne az entity és az id is
router.get("/:entity/:id", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let list = await db.find(req.params.id);
  res.json(list);
});

/* GET entity  */
// pld:   /users/     => Szerver visszaadja az összes felhasználót
// entity pl. a users vagy bármi más út
router.get("/:entity", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let list = await db.find();
  // awaittel addig nem fut tovább amíg meg nem kapja a listát
  res.json(list); //visszaadja a felhasználókat
});

/*  CREATE entity (new user)  */
router.post("/:entity", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let newData = await db.create(req.body); //itt adom át az adatot
  res.json(newData); //visszaadja az új felhasználót
});

/*  UPDATE entity (update user) with ID! */
router.put("/:entity/:id", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let newData = await db.update(id, req.body); //itt adom át az adatot
  res.json(newData); //visszaadja az új adatot
});

/*  DELETE entity (update user) with ID! */
router.delete("/:entity/:id", async (req, res, next) => {
  const db = new DB(req.params.entity);
  let deletedData = await db.update(id); //itt csak id-t várok
  res.json(deletedData); //visszaadja az új adatot
});

module.exports = router;
