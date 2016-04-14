var middleware = {
    requireAuthentication : function (req, res, next) {
        console.log("Private route hit");
        next();
    },
    logger: function (req, res, next) {
        console.log("Request: method - " + req.method + " to - " + req.originalUrl + " at" + new Date().toString());
        next();
    }
};

module.exports = middleware;