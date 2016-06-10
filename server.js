var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// POST-body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Log requests to console
app.use(function (req, res, next) {
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
    next();
});

// Serve static files from dist directory
app.use(express.static("./dist"));

app.listen(port);

console.log(`Express app running on port ${port}`);
