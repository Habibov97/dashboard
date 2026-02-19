const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, '../../.env.local');
dotenv.config({ path: envPath });

const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  node_env: process.env.NODE_ENV,
};

module.exports = config;
