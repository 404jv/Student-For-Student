const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const path = require('path');

const app = express();
app.use(express.json());
app.use(routes);
app.use(errors());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({ error: error.message });
});

app.listen(3333, () => console.log('Server is running: http://localhost:3333'));
