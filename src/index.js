import express from 'express';
import config from './config/config';
import db from './database/config';
import router from './routers/root';

const app = express();
const port = config.port;

db.connect();

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
