const mongoose = require("mongoose");

const medicoSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: [true, 'Id obligatorio']
  },
  dni: {
    type: String,
    unique: true,
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
  especialidad: {
    type: String,
    required: [true, 'Especialidad obligatoria']
  }
}, { collection: 'medicos' });


const Medico = mongoose.model('medico', medicoSchema);

module.exports = Medico;