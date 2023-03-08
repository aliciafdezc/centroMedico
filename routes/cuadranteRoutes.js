const { Router } = require('express');
const router = Router();
const cuadrante = require('../controllers/cuadranteController');


router.get('/', cuadrante.generarCuadrante);


module.exports = router;