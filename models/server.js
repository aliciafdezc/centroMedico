const cors = require('cors');
const express = require('express');
const { conexionDB } = require('../database/Conexion');

class Server {

    constructor() {
        this.app = express();
        this.pacientesPath = '/api/pacientes';
        this.cuadrantePath = '/api/cuadrante';
        this.medicosPath = '/api/medicos';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
        
    }
    async conectarDB() {
        await conexionDB();
    }

    middlewares() {
        this.app.use(cors());
        
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.pacientesPath , require('../routes/pacientesRoutes'));
        this.app.use(this.cuadrantePath , require('../routes/cuadranteRoutes'));
        this.app.use(this.medicosPath , require('../routes/medicosRoutes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en: ${process.env.PORT}`);
        })
    }
}

module.exports = Server;