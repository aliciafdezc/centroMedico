const { Router } = require('express');
const router = Router();
const cuadrante = require('../controllers/cuadranteController');


router.get('/', cuadrante.getCuadranteSemanal);
router.get('/generar', cuadrante.generarCuadranteSemanal);

module.exports = router;