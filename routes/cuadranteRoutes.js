const { Router } = require('express');
const router = Router();
const cuadrante = require('../controllers/cuadranteController');


router.get('/', cuadrante.getCuadranteSemanal);
router.get('/generar', cuadrante.generarCuadranteSemanal);
router.put('/cita', cuadrante.pedirCita);


module.exports = router;