const { check } = require('express-validator');
const { Router } = require('express');
const router = Router();
const pacientes = require('../controllers/pacientesController');


router.get('/', pacientes.getListaPacientes);
router.get('/:id', pacientes.getPaciente);
router.get('/:id', pacientes.getPacientesMedico);
router.post('/', pacientes.insertPacientes);
router.put('/:id', pacientes.updatePaciente);
router.delete('/:id', pacientes.deletePaciente);


module.exports = router;