// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
    res.send('This is a comments page');
});

// create another route
app.get('/comments/new', function(req, res) {
    res.send('This is a new comments page');
});

// create another route
app.get('/comments/:id', function(req, res) {
    res.send('This is a comments page for ' + req.params.id);
});

// create another route
app.get('/comments/:id/edit', function(req, res) {
    res.send('This is an edit page for ' + req.params.id);
});

// create another route
app.get('/comments/:id/delete', function(req, res) {
    res.send('This is a delete page for ' + req.params.id);
});

// start the web server
app.listen(3000, function() {
    console.log('Listening on port 3000');
});