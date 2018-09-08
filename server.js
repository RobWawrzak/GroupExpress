var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express()

//var PORT = process.env.PORT || 5000;
var PORT = 5000;



app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function () {
    console.log('Running on PORT ' + PORT);
});