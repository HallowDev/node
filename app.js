const express = require('express');
const app = express();
const db = require("./models/index.js");
const router = require("./routes/index.js");
const path = require('path');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8080'
};
//Ajout des routes

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));


module.exports = app;