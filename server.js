//
// Super basic express server for serving up our
// AngularJS files.
//
var express = require('express');
var app = express();
//var backend = require('./node/endpoints/dummy-backend');

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);

    // Routes
    //app.post('/doSomething', backend.doSomething);
});
app.listen(3000);
console.log("Server running on: http://localhost:3000/");