// DEPENDENCIES
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");

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

// LISTENER
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });