const mongoose = require('mongoose');

class Conexion {

    constructor() {
        try {
            mongoose.connect("mongodb://" + process.env.DB_URL + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE);
            console.log('Base de datos online');
    
        } catch (error) {
            console.log(error);
            throw new Error('Error a la hora de iniciar la base de datos');
        }
    
    }
}


module.exports = Conexion;
