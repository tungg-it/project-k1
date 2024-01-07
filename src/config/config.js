import env from 'dotenv';

env.config();

const configApp = {
  port: process.env.PORT,
  database: {
    url: process.env.MONGODB_URL,
  },
};

export default configApp;
