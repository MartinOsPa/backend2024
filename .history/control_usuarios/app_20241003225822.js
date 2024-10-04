const express = require("express");

const app = express();

//GET para obetener información
app.get("/usuario", (req, res) => {
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
    res.status(200).send(usuarios);

})


app.listen(3000, () => {
    console.log("Nuevo servidor corriendo en https://localhost:3000")
});