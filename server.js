const express = require('express');

const app = express();

const port = 3000;

app.get('/', function(req, res, next) {
    res.send('Homemade Goods');
});

app.get('/donuts', function(req, res) {
    res.send('Donuts page');
});

app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});