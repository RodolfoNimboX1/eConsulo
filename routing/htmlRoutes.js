// ROUTES
// ==============================================================================
var path = require("path");

module.exports = function(app) {
// GET Route to / which display's the home page.
app.get("/", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/login.html"));
});

// GET Route to /index which display's the survey page.
app.get("/index", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET Route to /categories which display's the survey page.
app.get("/categories", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/categories.html"));
});

}