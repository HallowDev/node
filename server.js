require('dotenv').config()
const app = require("./app.js");
const cors = require('cors');
const corsOptions = {
    origin: process.env.ALLOW_ACCESS_ORIGIN
};

const port = process.env.PORT
app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})