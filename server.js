const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://nilaybarde:oPpleA9vA3IPwAlE@cluster0.jarvx.mongodb.net/cs5500-a1-db?retryWrites=true&w=majority"
);
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello World!"));

require("./movies/service")(app);

const PORT = 4000;

app.listen(PORT);
