process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLER EXCEPTION... Shutting down!');

  process.exit(1);
});

const config = require('./config');
const express = require('express');
const cors = require('cors');
const AppError = require('./utils/appError.utils');
require('./config/database');
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
  next(new AppError(`Cant find ${req.originalUrl} url on this server`, 404));
});

app.use(globalErrorHandler);

const server = app.listen(config.port, () => {
  console.log(`listening to http://localhost:${config.port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLER REJECTION... Shutting down!');
  server.close(() => {
    process.exit(1);
  });
});
