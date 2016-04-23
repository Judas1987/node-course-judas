var express = require("express");
var middleware = require("./middleware.js");
var os = require('os');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get("/about/", middleware.requireAuthentication ,function (req, res) { 
    res.send("About  compadre putiño!");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () { 
    console.log("The web server has started on port " + PORT);
});


var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    ++alias;
  });
});