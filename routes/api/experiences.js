const express = require("express");
const router = express.Router();
const experiencesCtrl = require("../../controllers/api/experiences");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", ensureLoggedIn, experiencesCtrl.create);

router.get("/", experiencesCtrl.getAll);

router.get("/:experienceid", experiencesCtrl.getOne);

module.exports = router;
