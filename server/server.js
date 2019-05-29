const color = require('colors/safe');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('./config/config');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use( require('./routes/usuario'))


mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false }, (err, res) => {
  if( err ) throw err;

  console.log('Base de datos mongoDB', color.green('onLine'));
});

app.listen(process.env.PORT, () => {
  console.log('Express en puerto', color.blue(process.env.PORT));
})