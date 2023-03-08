const { response, request } = require('express');
const queriesPacientes = require('../database/queries/queriesPacientes');


const getPaciente = async(req = request, res = response) => {
    try {
        const resp = await queriesPacientes.getPaciente(req.params.id);

        res.status(200).json({ 'paciente': resp });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'Registro no encontrado' });
    }
}


const getListaPacientes = async(req = request, res = response) => {
    try {
        const resp = await queriesPacientes.getListaPacientes();

        res.status(200).json({ 'pacientes': resp });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'No hay registros' });
    }
}


const insertPacientes = async (req = request, res = response) => {
    try {
        const resp = await queriesPacientes.insertPacientes(req.body);

        res.status(200).json({ 'msg': 'Insertado con éxito', 'data': req.body });
    
    } catch (err) {
        res.status(200).json({ 'msg': 'Error al insertar' });
    }
}


const updatePaciente = async(req = request, res = response) => {
    try {
        const resp = await queriesPacientes.updatePaciente(req.params.id, req.body);

        if (resp.modifiedCount > 0)
            res.status(200).json({ 'msg': 'Modificado con éxito', 'data': req.body });
        else  
            res.status(200).json({ 'msg': 'Registro no encontrado' });

    } catch (err) {
        res.status(200).json({ 'msg': 'Error al modificar' });
    }
}


const deletePaciente = async(req = request, res = response) => {
    try {
        const resp = await queriesPacientes.deletePaciente(req.params.id);

        if (resp.deletedCount > 0)
            res.status(200).json({ 'msg': 'Borrado con éxito' });
        else  
            res.status(200).json({ 'msg': 'Registro no encontrado' });

    } catch (err) {
        res.status(200).json({ 'msg': 'Error al borrar' });
    }
}



module.exports = {
    getPaciente,
    getListaPacientes,
    insertPacientes,
    updatePaciente,
    deletePaciente,
}

