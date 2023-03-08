const { response, request } = require('express');
const queriesMedicos = require('../database/queries/queriesMedicos');
const crypto = require('crypto');


const getMedico = async(req = request, res = response) => {
    try {
        const resp = await queriesMedicos.getMedico(req.params.id);

        res.status(200).json({ 'medico': resp });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'Registro no encontrado' });
    }
}


const getMedicoEspecialidad = async(req = request, res = response) => {
    try {
        const resp = await queriesMedicos.getMedico(req.params.esp);

        res.status(200).json({ 'medico': resp });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'Registro no encontrado' });
    }
}


const generarListaMedicos = async (req = request, res = response) => {
    const medicos = [];

    for (let i = 0; i < req.params.cant; i++) {
        medicos.push(generarMedico());
    }

    try {
        const resp = await queriesMedicos.insertMedicos(medicos);

        res.status(200).json({ 'msg': 'Insertados con éxito', 'data': resp });

    } catch (err) {
        res.status(200).json({ 'msg': err });
    }
}



const generarMedico = () => {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    const numDNI = Math.floor(10000000 + Math.random() * 90000000);
    const letraDNI = letras[numDNI % 23];
    const nombres = ['Sauron', 'Gandalf', 'Aragorn', 'Frodo', 'Galadriel', 'Gimli', 'Legolas', 'Arwen', 'Elrond', 'Éowyn'];
    const apellidos = ['Baggins', 'Banks', 'Boffin', 'Bolger', 'Whitfoot', 'Maggot', 'Cotton', 'Rumble', 'Sackville' ];
    const especialidades = ['Medicina general', 'Rodillología', 'Ojología', 'Golpenloslomoslogía', 'Tontología', 'Gargantología'];

    return {
        id: crypto.randomUUID(),
        dni: numDNI.toString() + letraDNI,
        nombre: nombres[Math.floor(Math.random() * nombres.length)],
        apellido1: apellidos[Math.floor(Math.random() * apellidos.length)],
        apellido2: apellidos[Math.floor(Math.random() * apellidos.length)],
        edad: Math.floor(Math.random() * 2000),
        especialidad: especialidades[Math.floor(Math.random() * especialidades.length)],
    }
}


module.exports = {
    getMedico,
    getMedicoEspecialidad,
    generarListaMedicos,
}

