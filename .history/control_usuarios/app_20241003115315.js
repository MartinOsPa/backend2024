const express = require('express');

const app = express();

//GET para obetener información
app.get("/", (req, res) => {
    const usuarios = [
        {
            id: 1,
            nombre: "Martin",
            apellido: "Osorio",
            email: "mo631254@gmail.com",
        },
        {
            id: 2,
            nombre: "Daniel",
            apellido: "Pascual",
            email: "danibory@gmail.com",

        }
    ];
    res.status(200).send("Hola mundo! ");

})


app.listen(3000, () => {
    console.log("Servidor corriendo en https://localhost:3000")
});