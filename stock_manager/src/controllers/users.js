const { request, response } = require('express');
const bcrypt = require('bcrypt');
const { usersQueries } = require('../models/users');
const pool= require('../db/connection');

//const users = [
  //  { id: 1, name: 'John Doe' },
   // { id: 2, name: 'Martin Ospa' },
   // { id: 3, name: 'BobSmith' },
//];

const saltRounds =10;

const getAllUsers = async (req = request, res = response) =>{
    let conn;
    try{
        conn = await pool.getConnection();
        const users = await conn.query(usersQueries.getAll);

        res.send(users);
    }catch(error){
        res.status(500).send(error);
        return;
    }finally{
        if (conn) conn.end();
    }
}


const getUserById=async(req=request, res=response)=>{
    const {id}=req.params;

    if(isNaN(id)){
        res.status(400).send('Invalid ID');
        return;
      }

      let conn;
      try{
        conn=await pool.getConnection();
        const user=await conn.query(usersQueries.getById, [+id]);
        if(user.length===0){
          res.status(404).send('User not found');
          return;
        }

        res.send(user);

      }catch(error){
        res.status(500).send(error);

      }finally{
        if(conn) conn.end();
      }

      //const user  = users.find(user => user.id === +id); 
}


const loginUser = async(req = request, res = response) =>{
    const {username, password} = req.body;
  
    if(!username || !password){
      res.status(400).send('Username and Password are mandatory!');
      return;
    }
  
    let conn;
    try{
      conn = await pool.getConnection();
  
      const user = await conn.query(usersQueries.getByUsername,[username]);
      if(user.length === 0){
        res.status(400).send('Bad username or password');
        return;
      }
  
      const passwordMatch = await bcrypt.compare(password, user[0].password);
      if(!passwordMatch){
        res.status(403).send('Bad username or password');
        return;
      }
      res.send('Loged in!');
    }catch(error){
      res.status(500).send(error);
    }finally{
      if(conn) conn.end();
    }
  }

// Crear un nuevo usuario
const createUser = async(req = request, res = response) => {
    const {username,password,email} = req.body;
  
    if (!username || !password || !email) {
        res.status(400).send('Bad request');
        return;
    }
  
    let conn;
  
    try{
      conn=await pool.getConnection();
  
      const user=await conn.query(usersQueries.getByUsername,[username]);
  
      if(user.length>0){
        res.status(409).send('User alredy exists');
        return;
      }
  
    const hashPassword= await bcrypt.hash(password, saltRounds);


    const newUser=await conn.query(usersQueries.create, [username,hashPassword,email]);
  
      if(newUser.affecteRows===0){
        res.status(500).send('User not be created');
        return;
      }
      //console.log(newUser);
  
      res.status(201).send("User Created succesfully")
  
    }catch(error){
      res.status(500).send(error);
      return;
  
    }finally{
      if(conn) conn.end();
    }
  
    //users.push({id:users.length+1, name});
    //res.send('User created succesfully');
  }





const updateUser = async (req = request, res = response) => {
    const { id } = req.params;
    const { username, password, email } = req.body;

    if (isNaN(id) || !username || !password || !email) {
        res.status(400).send('Invalid request: ID and all fields are required');
        return;
    }

    let conn;
    try {
        conn = await pool.getConnection();
        
        // Verificar si el usuario existe
        const user = await conn.query(usersQueries.getById, [+id]);
        if (user.length === 0) {
            res.status(404).send('User not found');
            return;
        }
        
        // Actualizar usuario
        const result = await conn.query(usersQueries.update, [username, password, email, +id]);
        
        if (result.affectedRows === 0) {
            res.status(500).send('User could not be updated');
            return;
        }

        res.send('User updated successfully');
    } catch (error) {
        res.status(500).send(error);
    } finally {
        if (conn) conn.end();
    }
}

const deleteUser = async (req = request, res = response) => {
    const { id } = req.params;

    if (isNaN(id)) {
        res.status(400).send('Invalid ID');
        return;
    }

    let conn;
    try {
        conn = await pool.getConnection();

        // Verificar si el usuario existe
        const user = await conn.query(usersQueries.getById, [+id]);
        if (deleteUser.affecteRows === 0) {
            res.status(404).send('User not found');
            return;
        }
        
        // Eliminar usuario
        const result = await conn.query(usersQueries.delete, [+id]);
        
        if (result.affectedRows === 0) {
            res.status(500).send('User could not be deleted');
            return;
        }

        res.send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error);
    } finally {
        if (conn) conn.end();
    }
}

// Actualizar un usuario
/*const updateUser = (req = request, res = response) => {
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
}*/

// Eliminar un usuario por ID
/*const deleteUser = (req = request, res = response) => {
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
};*/

module.exports = { getAllUsers, getUserById, loginUser, createUser, updateUser, deleteUser };

/*const getMessage = (req = request, res = response) => {
    res.send('Helllo from the users conrtoller!');

}

module.exports = { getMessage};
*/

