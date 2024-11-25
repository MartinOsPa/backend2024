const express = require('express');
const usersRoutes = require('./routes/users');       // Rutas de usuarios
const staffRoutes = require('./routes/staff');       // Rutas de staff
const clientsRoutes = require('./routes/clients');   // Rutas de clientes
const productsRoutes = require('./routes/products'); // Rutas de productos
const salesRoutes = require('./routes/sales');       // Rutas de ventas



const app = express();

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        /*this.app.get('/', (req, res) => {
            res.send('Hello world!');
        });*/

        this.app.use('/users', usersRoutes);       // Rutas de usuarios
        this.app.use('/staff', staffRoutes);       // Rutas de staff
        this.app.use('/clients', clientsRoutes);   // Rutas de clientes
        this.app.use('/products', productsRoutes); // Rutas de productos
        this.app.use('/sales', salesRoutes);       // Rutas de ventas
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Example app listening on port ' + this.port);
        });
    }
}

module.exports = { Server };



