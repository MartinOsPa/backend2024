const { Router, request, response } = require('express');

//const users = [
  //  { id: 1, name: 'John Doe' },
   // { id: 2, name: 'Martin Ospa' },
   // { id: 3, name: 'BobSmith' },
//];

const getAll = async (req = request, res = response) =>{
    let conn;
    try{
        conn = await pool.getConnection();
        const users = await conn.query('SELECT * FROM users');

        res.send(users);
    }catch(error){
        res.status(500).send('internal server error');
        return;
    }finally{
        if (conn) conn.end();
    }
}


const getById = (req = request, res = response) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send('Invalid ID');
        return;
    };

    const user = users.find(user => user.id === +id);
    if (!user) {
        res.status(404).send('user not found');
        return;
    }

    res.send(user);

}


// Crear un nuevo usuario
const createUser = (req = request, res = response) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).send('Name is required');
        return;
    }
    const user = users.find(user => user.name === name);

    if (user) {
        res.status(409).send('User alredy exists');
        return;
    }

    users.push({ id: users.length + 1, name });
    res.send('User created succesfully');
};

// Actualizar un usuario
const updateUser = (req = request, res = response) => {
    const { id } = req.params;
    const { name } = req.body;

    if (isNaN(id)) {
        res.status(400).send('Invalid ID');
        return;
    }

    const user = users.find(user => user.id === +id);

    if (!user) {
        res.status(404).send('User not found');
        return;
    }

    users.forEach(user => {
        if (user.id === +id) {
            user.name = name;
        }
    });
    res.send('user update succerfully');
}

// Eliminar un usuario por ID
const deleteUser = (req = request, res = response) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send('Invalid ID');
        return;
    }

    const user = users.find(user => user.id === +id);

    if (!user) {
        res.status(404).send('User not found');
        return;
    }

    users.splice(users.findIndex((user) => user.id === +id), 1);
    res.send('User deleted');
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };

/*const getMessage = (req = request, res = response) => {
    res.send('Helllo from the users conrtoller!');

}

module.exports = { getMessage};
*/

