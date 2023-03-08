const mCuadrante = require('../../models/cuadrante');
const crypto = require('crypto');


const insertarCuadrante = async (cuadrantes) => {
    cuadrantes.map(c => c.id = crypto.randomUUID());
    return await mCuadrante.insertMany(cuadrantes);
}


const getCuadranteSemanal = async () => {
    return await mCuadrante.find();
}


module.exports = {
    insertarCuadrante,
    getCuadranteSemanal
};
