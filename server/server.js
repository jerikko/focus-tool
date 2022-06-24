const path = require('path');
const express = require('express');
const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  console.log('Starting in production mode...', process.env.NODE_ENV)
  // serve any static files in /dist folder
  app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
}

app.use('/api', apiRouter);



// catch-all route handler for any requests to unknown routes
app.use((req, res) => res.status(404).send(`Get your head in the game! This page doesn't exist!`));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' }
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;