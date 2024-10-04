const express = require('express');

const app = express();

//GET para obetener información
app.get("/", (req, res) => {
    res.status(200).send("Hola mundo! ");

})


app.listen(3000, () => {
    console.log("Servidor corriendo en https://localhost:3000")
});