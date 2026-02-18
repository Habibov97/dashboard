const config = require('./config');
const express = require('express');
const cors = require('cors');
const AppError = require('./utils/error.utils');
const dbConnect = require('./config/database');
const router = require('./routes');
const globalErrorHandler = require('./middlewares/globalErrorHandling.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'welcome' });
});

app.use('/api', router);

app.use((req, res, next) => {
  next(new AppError('Cant find url on this server', 404));
});

app.use(globalErrorHandler);

dbConnect().then(() => {
  app.listen(config.port, () => {
    console.log(`listening to http://localhost:${config.port}`);
  });
});
