const config = require('../config');

const sendErrorDev = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('ERRORRR', err);
    res.status(500).json({ status: 'error', message: 'Something went wrong!' });
  }
};

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (config.node_env === 'development') {
    sendErrorDev(err, res);
  } else if (config.node_env === 'production') {
    // const error = { ...error };

    // if (error.name === 'CastError') error = handleCastErrorDB(error);
    // if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    // if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
    // if (error.name === 'JsonWebTokenError') error = handleJWTError();
    // if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(err, res);
  }

  return sendErrorDev(err, res);
};

module.exports = errorMiddleware;
