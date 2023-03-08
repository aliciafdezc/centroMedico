const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: [true, 'Id obligatorio']
  },
  dni: {
    type: String,
    required: [true, 'DNI obligatorio']
  },
  nombre: {
    type: String,
    required: [true, 'Nombre obligatorio']
  },
  apellido1: {
    type: String,
    required: [true, 'Primer apellido obligatorio']
  },
  apellido2: {
    type: String,
    required: [true, 'Segundo apellido obligatorio']
  },
  edad: {
    type: Number,
    required: [false, 'Edad no obligatoria']
  },
  nSeguro: {
    type: Number,
    required: [true, 'Número de seguro obligatorio']
  }
}, { collection: 'centromedicodb.pacientes' });


const Paciente = mongoose.model('paciente', pacienteSchema);

module.exports = Paciente;