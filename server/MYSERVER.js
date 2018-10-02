// my server.js


// packages 
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

var router = express.Router(); 

// test route http://localhost:8080/hello/:name example http://localhost:8080/hello/test
app.get('/hello/:name', function (req, res, next) {
    res.json({
        hello: req.params.name,
    });
});
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Server listen on port ' + port);