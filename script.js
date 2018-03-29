var express = require('express');
var app = express();
var port = 8080;
var regex = /(https?:\/\/)([\da-zA-Z\-]+).([\da-zA-z\-]+).([\da-zA-z\-\.]+)/;

app.get('/:url', function(req, res) {
    console.log(regex.test(req.params.url));
    res.end(req.params.url);
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});