import express from "express";
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";
import UserDao from "./daos/UserDao";
import TuitDao from "./daos/TuitDao";
import mongoose from "mongoose";

const app = express();
mongoose.connect(
    "mongodb+srv://nilaybarde:<password>@cluster0.jarvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/add/:a/:b", (req, res) => {
    res.send(req.params.a + req.params.b);
});

let userDao = new UserDao();
let tuitDao = new TuitDao();
let userController = new UserController(app, userDao);
let tuitController = new TuitController(app, tuitDao);

const PORT = 4000;
app.listen(process.env.PORT || PORT);
