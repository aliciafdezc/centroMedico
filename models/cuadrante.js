const mongoose = require("mongoose");

const cuadranteSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: [true, 'Id obligatorio']
    },
    dia: {
        type: String,
        required: [true, 'Día obligatorio']
    },
    mes: {
        type: String,
        required: [false]
    },
    anio: {
        type: String,
        required: [false]
    },
    turno: {
        type: String,
        required: [true, 'Turno obligatorio']
    },
    citas: {
        type: [{
            idMedico: { type: String },
            idsPacientes: [{ type: String }]
        }],
        required: [false]
    }
}, { collection: 'cuadrantes' });


const Cuadrante = mongoose.model('cuadrante', cuadranteSchema);

module.exports = Cuadrante;