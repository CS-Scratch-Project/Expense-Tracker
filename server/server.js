// requiring the path
const path = require('path');

// we are calling the express library
const express = require('express');

// invoking the express library
const app = express();

// path to take us to the router
const apiRouter = require('./routes/api.js');
const moreApis = require('./routes/moreApis.js');

// the port we are listening to down at the bottom
const PORT = 3000;

// method in express used to recognize the incoming request object as a json object
app.use(express.json());

// for our inputs- to recognize incoming request objects as strings or arrays
app.use(express.urlencoded({ extended: true }));

// used to serve our static files.  Serve static files first.
app.use(express.static(path.join(__dirname, '../client')));

// used to take us to our routers with endpoint, api
app.use('/api', apiRouter);
app.use('/moreapis', moreApis);

console.log('testing server');

// establing our 404, can't find requested webpage
app.use('/*', (req, res) =>
  res.status(404).send('This is not the page you are looking for')
);

// global error handling, using Object.assign- empty object, defaultErr, and our actual err passed in
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
