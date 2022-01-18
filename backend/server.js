import app from './app.js';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

//DB Config
mongoose.connect(process.env.DATABASE);

//Listener
const port = process.env.PORT || 8081;

const server = app.listen(port, () =>
  console.log(`Listening on localhost port ${port}`)
);

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

//Every 24 hours, heroku will shutdown our application by emitting Sigterm event. Handle it to ensure our app shut down properly.
process.on('SIGTERM', () => {
  console.log(
    '(☞ﾟヮﾟ) ☞SIGTERM RECEIVED. Shutting down gracefully... ☜(ﾟヮﾟ☜)'
  );
  //Sigterm will do process.exit(1) automactically
  server.close(() => {
    `Process terminated!`;
  });
});
