const { createServer } = require("https");

const server = createServer((req, res) => {
    res.write("Bienvenidos a mi primer servidor web");
    res.end();
});

server.listen(8080);

console.log("Servidor Web iniciado en 8080");
