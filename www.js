import {resolve} from "path";
import express from "express";
import multer from "multer";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(resolve("index.html"));
});

app.get("/browser.js", (req, res) => {
  res.sendFile(resolve("browser.js"));
});

app.post("/", multer().single("file"), (req, res) => {
  console.log("Filename:", req.file.originalname);
  res.send({filename: req.file.originalname});
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
