var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.keyboard;
handle["/keyboard"] = requestHandlers.keyboard;
handle["/message"] = requestHandlers.message;

server.start(router.route, handle);
