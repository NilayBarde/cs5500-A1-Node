import express from "express";
import UserController from "./controllers/UserController";
import UserDao from "./daos/UserDao";

import mongoose from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/tuiter");

const app = express();

app.get("/hello", (req, res) => res.send("Hello World!"));

app.get("/add/:a/:b", (req, res) => {
    res.send(req.params.a + req.params.b);
});

let userDao = new UserDao();
let userController = new UserController(app, userDao);

const PORT = 4000;
app.listen(process.env.PORT || PORT);
