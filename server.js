// DEPENDENCIES
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

// EXPRESS CONFIGURATION
// ==============================================================================
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
// The "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routing/htmlRoutes")(app);
app.use(express.static('public'));

app.post("/econsulows/api/getMentorias", function(req, res){
    var options = { method: 'POST',
    url: 'http://dev.outputcc.com/econsulows/api/getMentorias',
    headers: 
    { 'Content-Type': 'application/x-www-form-urlencoded' },
    json: true  };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        res.json(body);
        console.log(body);
    });
});

app.post("/econsulows/api/getCategories", function(req, res){
    var options = { method: 'POST',
    url: 'http://dev.outputcc.com/econsulows/api/getCategories',
    headers: 
    { 'Content-Type': 'application/x-www-form-urlencoded' },
    json: true  };

    request(options, function (error, response, body) {
    if (error) throw new Error(error);
        res.json(body);
        console.log(body);
    });
});

// LISTENER
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });