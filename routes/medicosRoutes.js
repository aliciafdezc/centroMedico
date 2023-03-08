const { Router } = require('express');
const router = Router();
const medicos = require('../controllers/medicosController');
/* 

router.get('/', medicos.getListaMedicos);
router.get('/:id', medicos.getMedico); */
router.post('/:cant', medicos.generarListaMedicos);
/* router.post('/', medicos.insertMedicos);
router.put('/:id', medicos.updateMedico);
router.delete('/:id', medicos.deleteMedico);
 */
module.exports = router;