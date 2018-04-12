const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball')


app.use(express.static(path.join(__dirname, './path/to/your/static/assets')))

app.use(volleyball('dev'));


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./apiRoutes')); // matches all requests to /api

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});

//handle 500 errors
app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});