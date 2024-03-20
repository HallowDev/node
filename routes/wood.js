const express = require("express");
const router = express();
const userCtrl = require("../controllers/wood.js");

router.get("/", userCtrl.woods);
//...

module.exports = router;