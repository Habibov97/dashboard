const config = require('./config');
const express = require('express');
const dbConnect = require('./config/database');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'welcome' });
});

app.use('/api', router);

dbConnect().then(() => {
  app.listen(config.port, () => {
    console.log(`listening to http://localhost:${config.port}`);
  });
});
