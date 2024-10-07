const Joi = require('joi');

const productoSchema = Joi.object({
  nombre: Joi.string().required(),
  precio: Joi.number().positive().required(),
  descripcion: Joi.string().required()
});

exports.validateProducto = (req, res, next) => {
  const { error } = productoSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

