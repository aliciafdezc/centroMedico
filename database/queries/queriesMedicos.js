const mMedico = require('../../models/medico');
const crypto = require('crypto');


const getMedico = async (idMedico) => {
    return await mMedico.findOne({ id: idMedico });
}


const getMedicoEspecialidad = async (especialidad) => {
    return await mMedico.findOne({ especialidad: especialidad });
}


const getListaMedicos = async () => {
    return await mMedico.find();
}


const insertMedicos = async (medicos) => {
    return await mMedico.insertMany(medicos);
}


const updateMedico = async (idMedico, medico) => {
    return await mMedico.updateOne({ id: idMedico },
        {
            dni: medico.dni,
            nombre: medico.nombre,
            apellido1: medico.apellido1,
            apellido2: medico.apellido2,
            edad: medico.edad,
            especialidad: medico.especialidad
        }
    );
}


const deleteMedico = async (idMedico) => {
    return await mMedico.deleteOne({ id: idMedico });
}



module.exports = {
    getMedico,
    getMedicoEspecialidad,
    getListaMedicos,
    insertMedicos,
    updateMedico,
    deleteMedico
};



