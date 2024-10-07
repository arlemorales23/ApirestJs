const Producto = require('../models/producto');

exports.getAllProductos = async (req, res) => {
  const productos = await Producto.getAll();
  res.json(productos);
};

exports.getProductoById = async (req, res) => {
  const producto = await Producto.getById(req.params.id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

exports.createProducto = async (req, res) => {
  const id = await Producto.create(req.body);
  res.status(201).json({ id, ...req.body });
};

exports.updateProducto = async (req, res) => {
  const affectedRows = await Producto.update(req.params.id, req.body);
  if (affectedRows) {
    res.json({ id: req.params.id, ...req.body });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

exports.deleteProducto = async (req, res) => {
  const affectedRows = await Producto.delete(req.params.id);
  if (affectedRows) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};
