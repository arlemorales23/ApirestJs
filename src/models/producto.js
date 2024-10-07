const pool = require('../config/database');

class Producto {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM productos');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(producto) {
    const { nombre, precio, descripcion } = producto;
    const [result] = await pool.query(
      'INSERT INTO productos (nombre, precio, descripcion) VALUES (?, ?, ?)',
      [nombre, precio, descripcion]
    );
    return result.insertId;
  }

  static async update(id, producto) {
    const { nombre, precio, descripcion } = producto;
    const [result] = await pool.query(
      'UPDATE productos SET nombre = ?, precio = ?, descripcion = ? WHERE id = ?',
      [nombre, precio, descripcion, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM productos WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Producto;
