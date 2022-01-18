import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import userRouter from './routes/userRouter.js';
import AppError from './utils/appError.js';
import globalErrorHandler from './controllers/errorController.js';

//App Config
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//API Endpoints
app.get('/', (req, res) => {
  res.status(200).send('Klee Chan!');
});

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError('404 not found!', 404));
});

//Global Error Handling
app.use(globalErrorHandler);

export default app;
