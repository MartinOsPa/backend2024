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
    ]; */
    res.status(200).send({ usuarios });

});

/*app.get("/usuarios/1", (req, res) => {
    res.status(200).send(usuarios[0]);
});*/

app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send({ error: "El id debe ser numero" });
        return;
    };




    const usuario = usuarios.find((usuario) => usuario.id === +id);

    if (usuario === undefined) {
        res.status(404).send({ error: "Usuario con ${id} no existe" });
        return;
    };
    return;
    //console.log(params)
    // res.status(200).send(usuarios[0]);
    res.status(200).send(usuario);
});

app.listen(3000, () => {
    console.log("Nuevo servidor corriendo en https://localhost:3000")
});