var express = require('express');


var app = express();

app.use(express.static(__dirname + '/client'));

var port = process.env.PORT || 8000;
app.listen(port);
console.log('listening on ',port);

// Expose app for testing
exports = module.exports = app;