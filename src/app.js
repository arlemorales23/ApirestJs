const express = require('express');
require('express-async-errors');
const helmet = require('helmet');
const productoRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Aplicar Helmet para mejorar la seguridad
app.use(helmet());

// Configuraciones específicas de Helmet (opcional)
app.use(helmet.contentSecurityPolicy({ // Es una función de helmet que implementa la política de seguridad de contenido (
  directives: { // Define las reglas que controlan qué recursos pueden ser cargados por la aplicació
    defaultSrc: ["'self'"],// No se permiten recursos externos a menos que se especifiquen explícitamente en otras directivas.
    scriptSrc: ["'self'", "'unsafe-inline'"],// Permite que los scripts sean cargados solo desde la misma aplicación 
    styleSrc: ["'self'", "'unsafe-inline'"],// Similar a scriptSrc, pero para los estilos (CSS).
    imgSrc: ["'self'", "data:", "https:"],// Permite que las imágenes se carguen desde la misma aplicación ('self')
  },
}));

app.use(helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }));

app.use(express.json());

app.use('/api/productos', productoRoutes);

app.use(errorHandler);

module.exports = app;

/*
helmet.referrerPolicy: Establece la política de referencia HTTP. 
La cabecera Referrer-Policy controla qué información de la URL original (la "referente") es enviada
 cuando un usuario navega de una página a otra, lo que puede prevenir fugas de información a sitios externos.

policy: 'strict-origin-when-cross-origin': Esta política indica que:

Si la navegación es dentro del mismo origen (misma página y dominio), el encabezado Referer 
incluirá la URL completa.
Si es hacia un origen diferente (cross-origin), solo se envía la parte de la URL que incluye el
 esquema (HTTP/HTTPS) y el dominio, pero no el resto de la URL (p.ej., la ruta o parámetros de consulta). Esto protege detalles sensibles en las URLs
*/
