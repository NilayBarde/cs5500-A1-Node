const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/movie-db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello World!"));

require("./movies/service")(app);

const PORT = 4000;

app.listen(PORT);
