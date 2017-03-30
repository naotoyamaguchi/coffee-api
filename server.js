const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;
const coffeeRouter = require('./routes/coffee');
const orderRouter = require('./routes/order');
const customerRouter = require('./routes/customer');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.listen(PORT, function() {
  console.log('Server started on PORT', PORT)
});