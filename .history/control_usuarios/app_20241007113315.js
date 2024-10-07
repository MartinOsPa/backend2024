const express = require("express");

const app = express();
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

//GET para obetener información
app.get("/usuarios", (req, res) => {
    /*const usuarios = [
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
    res.status(200).send({ usuarios });

});*/

    app.get("/usuarios/1", (req, res) => {
        res.status(200).send(usuarios[0]);
    });

    app.listen(3000, () => {
        console.log("Nuevo servidor corriendo en https://localhost:3000")
    });