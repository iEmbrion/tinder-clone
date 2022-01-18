import AppError from '../utils/appError.js';

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleValidationError = err => {
  console.log(`~~~~~~~~~~~Messages~~~~~~~~~~: `);
  console.log(err);
  const errors = Object.values(err.errors).map(el => `${el.path} ${el.kind}`);

  const message = errors.join(', ');

  return new AppError(message, 400);
};

const sendDevError = (err, req, res) => {
  res.status(err.statusCode).json({
    message: err.message,
    status: err.status,
    stack: err.stack,
    error: err,
  });
};

const sendProdError = (err, req, res) => {
  //Trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  //Programming or unknown error: don't leak error details (security)
  else {
    //1) Log error (This line logs to the hosting platform)
    console.log(`Error`, err);

    //2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendDevError(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error._message?.includes('validation failed'))
      error = handleValidationError(error);

    sendProdError(error, req, res);
  }
};

export default globalErrorHandler;
