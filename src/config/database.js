const mongoose = require('mongoose');
const config = require('.');

mongoose
  .connect(config.databaseURL)
  .then(() => {
    console.log('database has been connected');
    return true;
  })
  .catch(() => {
    console.log('cannot connect to data base');
    return false;
  });
