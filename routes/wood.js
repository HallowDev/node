const express = require("express");
const router = express();
const woodCtrl = require("../controllers/wood.js");
const auth = require("../middleware/auth.js")
const multer = require('../middleware/multer.js')

router.get("/", auth, woodCtrl.woods)
router.get("/:hardness", auth, woodCtrl.readByHardness);
router.post("/", auth, multer, woodCtrl.addWood)
//...

module.exports = router;