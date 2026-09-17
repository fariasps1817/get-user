const http = require('node:http');

//const user = {
//    name: 'Farias João',
//    email: 'tes@example.com'
//};

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify({
        nome: 'farias joão',
        email: 'farias.sousa@exemplo.com'
    }));

}).listen(3000);