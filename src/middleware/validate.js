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

/*
Joi es una librería de validación de datos para JavaScript que permite definir esquemas de validación de forma declarativa. 
Se utiliza comúnmente en aplicaciones Node.js para validar datos de entrada, como por ejemplo, los datos enviados en una solicitud HTTP.

*/

