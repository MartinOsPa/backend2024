const express = require("express");

const app = express();
app.use(express.json());

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


app.get("/usuarios/1", (req, res) => {
    res.status(200).send(usuarios[0]);
});
app.get("/usuarios/1", (req, res) => {
    res.status(200).send(usuarios[0]);

});


/*app.get("/usuarios/:id",(req, res)=>{
    const {id}=req.params;
    //const params = req.params;
    //console.log(params);
    //console.log(typeof(+id));
    if(isNaN(id)){
        res.status(400).send({error:"El id debe ser un numero"});
        return;
    };
    const usuario= usuarios.find((usuario)=>usuario.id === +id);
    res.status(200).send(usuario);
    //res.status(200).send("probando");

});*/

app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    //const params = req.params;
    //console.log(params);
    //console.log(typeof(+id));
    const usuario = usuarios.find((usuario) => usuario.id === +id);
    if (usuario === undefined) {
        res.status(404).send({ error: `el usuario con id ${id} no existe` });
        return;
    };
    res.status(200).send(usuario);
    //res.status(200).send("probando");
});//end point


/**-*****************************validación de tarea******************************************* */

app.post("/usuarios", (req, res) => {

    const { nombre, apellido, email } = req.body;
    if (!nombre || nombre.trim() === '') {
        return res.status(400).send({ error: "Nombre es un campo obligatorio, porfavor rellena el campo" });
    }
    if (!apellido || apellido.trim() === '') {
        return res.status(400).send({ error: "Apellido es un campo obligatorio, porfavor rellena el campo " });
    }
    if (!email || email.trim() === '') {
        return res.status(400).send({ error: "Email es un campo obligatorio, porfavor rellena el campo" });
    }

    const emailExists = usuarios.some(usuario => usuario.email === email);
    if (emailExists) {
        return res.status(400).send({ error: "El email que ingresaste ya esta en uso" });
    }

    usuarios.push({ id: usuarios.length + 1, nombre, apellido, email });


    res.status(201).send("El usuario se agregó correctamente");
});



//Metodo para actualizar 
//en el put debo de pasarlos los campos que se deben de identificar
app.put("/usuarios/:id", (req, res) => {
    const { nombre, apellido, email } = req.body;

    const id = +req.params.id;

    if (!nombre || !apellido || !email) {
        res.status(404).send({ error: "Todos los campos (nombre, apellido, email) son obligatorios" });
        return;
    }
    if (isNaN(+id)) {
        res.status(400).send({ error: "El id debe ser número" });
        return
    };

    //console.log(typeof +id);
    //console.log(params);

    const usuario = usuarios.find((usuario) => usuario.id === +id);

    if (usuario === undefined) {
        res.status(400).send({ error: "El usuario con id ${ id } no existe " });
        return;
    };

    usuarios.forEach((usuario) => {
        if (usuario.id === id) {
            usuario.nombre = nombre;
            usuario.apellido = apellido;
            usuario.email = email;
        }
    })
    res.status(200).send("El usuario se actualizo correctamente");
});

app.patch("/usuarios/:id", (req, res) => {

});




app.post("/usuarios", (req, res) => {
    const { nombre, apellido, email } = req.body;
    usuarios.push({ id: usuarios.length + 1, nombre, apellido, email })
    res.status(201).send("El usuario se agrego correctamennte");
    //console.log(req.body);
    //res.send("Hola desde post!");
}); // crear un nuevo recurso




app.listen(3000, () => {
    console.log("Nuevo servidor corriendo en https://localhost:3000")
});