const http = require('http');

const express = require('express');

const app = express();


app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});


app.use('/', (req, res, next) => {
    console.log('This always runs!');
    res.send('<h1>The FIRST APP Page</h1>');
    next();
});

app.listen(4000);