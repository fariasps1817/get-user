const http = require('node:http');

const user = {
    name: 'Farias João',
    email: 'tes@example.com'
};

http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(user));

}).listen(3000);