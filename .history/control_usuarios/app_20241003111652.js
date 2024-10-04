const express = require('express');

const app = express();

app.post("/", (req, res) => {
    res.status(200).send("Hola mundo! desde post");

})

app.listen(3000, () => {
    console.log("Servidor corriendo en https://localhost:3000")
});