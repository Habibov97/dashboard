const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, '../../.env.local');
dotenv.config({ path: envPath });

const config = {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
};

module.exports = config;
