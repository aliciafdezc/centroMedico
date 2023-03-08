const { response, request } = require('express');
const queriesCuadrante = require('../database/queries/queriesCuadrante');
const queriesMedicos = require('../database/queries/queriesMedicos');


const listDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const listTurnos = ['Mañana', 'Tarde'];
const especialidades = ['medicina general', 'rodillología', 'ojología', 'golpenloslomoslogía', 'tontología', 'gargantología'];
    

const generarCuadrante = async (req = request, res = response) => {
    const cuadrante = [];
    let citas = [];
    let medicos = await queriesMedicos.getListaMedicos();

    try {
        listDias.forEach(dia => {
            listTurnos.forEach(turno => {
                citas = [];
                especialidades.forEach(esp => {
                    citas.push({ idMedico: medicos.find(m => m.especialidad == esp).id || ''});
                });

                cuadrante.push({
                    dia: dia,
                    turno: turno, 
                    citas: citas
                });
            });
        });

        const resp = await queriesCuadrante.insertarCuadrante(cuadrante);

        res.status(200).json({ 'cuadrante': resp });

    } catch (err) {
        res.status(200).json({ 'msg': err });
    }
}




module.exports = {
    generarCuadrante,
}

