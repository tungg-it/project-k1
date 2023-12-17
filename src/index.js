const express = require("express");
const config = require("./config/config");
const db = require("./database/config");
const router = require("./routers/root");
const app = express();
const port = config.port;

db.connect();

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
