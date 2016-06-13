var express = require("express");
var path = require("path");
// var compression = require("compression");
var bodyParser = require("body-parser");

var ejs = require('ejs');

var app = express();

// environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// POST-body parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Compress post-body
// app.use(compression());

// Log requests to console
app.use(function (req, res, next) {
    console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
    next();
});

app.get('/', function(req, res){
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
})

// Serve static files from dist directory
app.use(express.static(path.join(__dirname + "/dist")));

app.listen(app.get('port'), function(){
    console.log(`Express app running on port ${app.get('port')}`);
});
