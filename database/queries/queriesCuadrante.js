const mCuadrante = require('../../models/cuadrante');
const crypto = require('crypto');


const insertarCuadrante = async (cuadrantes) => {
    cuadrantes.map(c => c.id = crypto.randomUUID());
    return await mCuadrante.insertMany(cuadrantes);
}


const getCuadranteSemanal = async () => {
    return await mCuadrante.find();
}


const updateCuadranteCitas = async (datosCita) => {
    const cuadrante =  await mCuadrante.find({
        dia: datosCita.dia,
        turno: datosCita.turno,
        citas: { $elemMatch: { idMedico: datosCita.idMedico } } 
    });

    console.log(cuadrante)
}


module.exports = {
    insertarCuadrante,
    getCuadranteSemanal,
    updateCuadranteCitas
};
