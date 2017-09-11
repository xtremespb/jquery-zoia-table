/**
 * Static HTTP Server
 */

const static = require('node-static');
const port = 8080;
const http = require('http');

const file = new static.Server(__dirname, {
    cache: 3600,
    gzip: true
});

http.createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
}).listen(port);