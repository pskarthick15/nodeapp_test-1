var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Karthick and Vineeth" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello Karthick and Vineeth" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works fine guys. Well done!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
