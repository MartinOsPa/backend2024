const express = require('express');

const app = express();

//GET para obetener información
app.get("/", (req, res) => {
    res.status(200).send("Hola mundo! ");

})

//POST para onetener un nuevo recurso o acceder a un nuevo recurso
app.post("/", (req, res) => {
    res.status(200).send("Hola mundo! desde POST");

})

//PUT para actualizar un recurso completo
app.put("/", (req, res) => {
    res.status(200).send("Hola mundo! desde PUT");

})
//PATCH para actualizar un recurso de forma parcial
app.patch("/", (req, res) => {
    res.status(200).send("Hola mundo! desde PATCH");

})

//DELETE para BORRAR un recurso
app.delete("/", (req, res) => {
    res.status(200).send("Hola mundo! desde DELETE");

})

app.listen(3000, () => {
    console.log("Servidor corriendo en https://localhost:3000")
});