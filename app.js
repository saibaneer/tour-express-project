const express = require('express');
const app = express();

const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

// Middlewares
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(express.static(`${__dirname}/public`))

// Routes Middleware
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter)

// Router Users

module.exports = app;

