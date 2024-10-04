const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.send(201);
    res.write("Hola mundo!");
    res.end();
});

server.listen(3000, '127.0.0.1');
console.log("Servidor iniciado en http://127.0.0.1:3000")