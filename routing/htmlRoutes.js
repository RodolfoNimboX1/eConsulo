// ROUTES
// ==============================================================================
var path = require("path");

module.exports = function(app) {
// GET Route to / which display's the log in page.
app.get("/", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/login.html"));
});

// GET Route to /mentoring which display's the mentoring page.
app.get("/mentoring", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/mentoring.html"));
});

// GET Route to /mentoring/mentor which display's the mentor page.
app.get("/mentor", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/mentor.html"));
});

// GET Route to /categories which display's the categories page.
app.get("/categories", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/categories.html"));
});

// GET Route to /profile which display's the categories page.
app.get("/profile", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/profile.html"));
});

}