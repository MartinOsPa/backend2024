const express = require('express');

const app = express();

app.GET("/", (req, res) => {
    res.status(200).send("Hola mundo! ");

})

app.post("/", (req, res) => {
    res.status(200).send("Hola mundo! desde POST");

})

app.put("/", (req, res) => {
    res.status(200).send("Hola mundo! desde PUT");

})



app.listen(3000, () => {
    console.log("Servidor corriendo en https://localhost:3000")
});