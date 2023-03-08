const cors = require('cors');
const express = require('express');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.path = '/api';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        // Rutas
        this.routes();
        
    }
    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.path , require('../routes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;