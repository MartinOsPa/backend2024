const express = require('express');

const app = express();

//GET para obetener información
app.get("/usuarios", (req, res) => {
    const usuarios = [
        {
            id: 1,
            nombre: "Martin",
            apellido: "Osorio",
            email: "mo631254@gmail.com",
        },
        {
            id: 1,
            nombre: "Daniel",
            apellido: "Osorio",
            email: "mo631254@gmail.com",

        }
    ];
    res.status(200).send("Hola mundo! ");

})


app.listen(3000, () => {
    console.log("Servidor corriendo en https://localhost:3000")
});