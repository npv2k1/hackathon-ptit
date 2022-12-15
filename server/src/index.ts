import "dotenv/config";
import express, { Request, Response } from "express";
import { createServer } from "http";
import path from "path";
import initSocket from "./modules/socket/socket";

import "./services/db";

var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(path.join(__dirname, "public"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const httpServer = createServer(app);
initSocket(httpServer);

/* Listening to the port 5000. */
httpServer.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port 5000.");
});
