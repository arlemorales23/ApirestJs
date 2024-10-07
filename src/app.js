const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const productoRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Aplicar Helmet para mejorar la seguridad
app.use(helmet());

// Configuraciones específicas de Helmet (opcional)
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
  },
}));

app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));

app.use(express.json());

app.use('/api/productos', productoRoutes);

app.use(errorHandler);

module.exports = app;



