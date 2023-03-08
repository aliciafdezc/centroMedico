const { response, request } = require('express');
const queriesCuadrante = require('../database/queries/queriesCuadrante');
const queriesMedicos = require('../database/queries/queriesMedicos');


const getCuadranteSemanal = async (req = request, res = response) => {
    try {
        const resp = await queriesCuadrante.getCuadranteSemanal();

        res.status(200).json({ 'cuadrante': resp });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'Registro no encontrado' });
    }
}


const generarCuadranteSemanal = async (req = request, res = response) => {
    const listDias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const listTurnos = ['Mañana', 'Tarde'];
    const especialidades = ['medicina general', 'rodillología', 'ojología', 'golpenloslomoslogía', 'tontología', 'gargantología'];
    const cuadrante = [];
    let citas = [];
    let medicos = await queriesMedicos.getListaMedicos();

    try {
        listDias.forEach(dia => {
            listTurnos.forEach(turno => {
                citas = [];
                especialidades.forEach(esp => {
                    citas.push({ idMedico: medicos.find(m => m.especialidad == esp).id || '' });
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
        res.status(200).json({ 'msg': 'Error al generar cuadrante' });
    }
}


const pedirCita = async (req = request, res = response) => {
    try {
        const resp = await queriesCuadrante.updateCuadranteCitas(req.body);

        res.status(200).json({ 'cita': resp });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'Registro no encontrado' });
    }
}



module.exports = {
    getCuadranteSemanal,
    generarCuadranteSemanal,
    pedirCita
}

