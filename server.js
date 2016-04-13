var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication : function (req, res, next) {
        console.log("Private route hit");
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method + " " + req.originalUrl + " at" + new Date().toString());
        next();
    }
};

//app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get("/about/", middleware.requireAuthentication ,function (req, res) { 
    res.send("About compadre putiño!");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () { 
    console.log("The web server has started on port " + PORT);
});