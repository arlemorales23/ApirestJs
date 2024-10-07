const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { validateProducto } = require('../middleware/validate');

router.get('/', productoController.getAllProductos);
router.get('/:id', productoController.getProductoById);
router.post('/', validateProducto, productoController.createProducto);
router.put('/:id', validateProducto, productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;
