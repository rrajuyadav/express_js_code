require("dotenv").config();
const { config } = require("dotenv");
const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => { 
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("rajuyadavdotcom");
});
app.get("/login", (req, res) => {
  res.send("hi this is a login page, you can login here.");
});
app.get("/get", (req, res) => {
    res.send("<h1>hi this is a login page, you can login here.</h1>");
  });
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
