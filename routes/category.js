// ====================================================
//      Routes API: Categorías
//      By AYRA Team ©
// ====================================================

const express = require('express');

//const { verifyToken, verifyAdminRole } = require('../middlewares/authorization.js'); para uso de middlewares

const categoryController = require('../controllers/category');

const api = express.Router();

/* // =====================
// Todas las categorias
// =====================
api.get('/all', categoryController.getCategories);

// =====================
// Una categoria por id
// =====================
api.get('/:id', categoryController.getCategoryById);

// =====================
// Crear nueva categoria
// =====================
api.post('/save', [verifyToken, verifyAdminRole], categoryController.saveCategory);

// =====================
// Editar categoria
// =====================
api.put('/:id', [verifyToken, verifyAdminRole], categoryController.updateCategory);

// =====================
// Editar categoria
// =====================
api.put('/status/:id', [verifyToken, verifyAdminRole], categoryController.updateCategory);

// =====================
// Eliminar categoria
// =====================
api.delete('/:id', [verifyToken, verifyAdminRole], categoryController.deleteCategory); */

api.get('/all', categoryController.getCategories);

module.exports = api;