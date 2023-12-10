const express = require("express");
const config = require("./config/config");
const db = require("./config/db");
const app = express();
const port = config.port;

db.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
