const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({ // Define una constante llamada pool que almacenará el grupo de conexiones.
  host: process.env.DB_HOST, // 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,  // Si está en true, cuando todas las conexiones están ocupadas, las solicitudes de nuevas conexiones se ponen en espera hasta que se libere alguna.
  connectionLimit: 10,
  queueLimit: 0  // Establece el número máximo de conexiones que se pueden poner en cola cuando el número de conexiones activas alcanza el límite
});
module.exports = pool;

