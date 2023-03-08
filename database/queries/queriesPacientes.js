const mPaciente = require('../../models/paciente')
const crypto = require('crypto');


const getPaciente = async (idPaciente) => {
    return mPaciente.findOne({ id: idPaciente });
}


const getListaPacientes = async () => {
    return mPaciente.find();
}


const insertPacientes = async (pacientes) => {
    pacientes.map(p => p.id = crypto.randomUUID());
    return await mPaciente.insertMany(pacientes);
}


const updatePaciente = async (idPaciente, paciente) => {
    return await mPaciente.updateOne({ id: idPaciente },
        {
            "dni": paciente.dni,
            "nombre": paciente.nombre,
            "apellido1": paciente.apellido1,
            "apellido2": paciente.apellido2,
            "edad": paciente.edad,
            "nSeguro": paciente.nSeguro
        }
    );
}


const deletePaciente = async (idPaciente) => {
    console.log(idPaciente)
    return await mPaciente.deleteOne({ id: idPaciente });
}



module.exports = {
    getPaciente,
    getListaPacientes,
    insertPacientes,
    updatePaciente,
    deletePaciente
};



