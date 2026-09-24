const http = require('node:http');

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url !== '/users') {
    response.writeHead(
        404,
        { 'content-type': 'application/json' }
    );
    response.end(JSON.stringify ({ message: 'Não existente.' }));
    return;
    }
    
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify([{
    name: 'Régis Pinheiro',
    email: 'pregis007@gmail.com'
}, {
    name: 'Thayane',
    email: 'thayanedomingos@gmail.com'
}, {
    name: 'Aline',
    email: 'Alinebrauna@gmail.com'
}]));
}).listen(3000);