const express = require('express');
const app = express();
const db = require("./models/index.js");
const router = require("./routes/index.js");
//Ajout des routes

app.use(express.json());
app.use("/api", router);

db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));


module.exports = app;