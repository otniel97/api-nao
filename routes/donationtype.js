// ====================================================
//      Routes API: Donation Type
//      By AYRA Team ©
// ====================================================

const express = require('express');

//const { verifyToken, verifyAdminRole } = require('../middlewares/authorization.js'); para uso de middlewares

const donationTypeController = require('../controllers/donationtype');

const api = express.Router();

// =================================
// Todas los tipos de donaciones
// =================================
api.get('/all', donationTypeController.getDonationTypes);

// ==============================
// Un tipo de donación por id
// ==============================
api.get('/:id', donationTypeController.getDonationTypeById);

// ===============================
// Crear nuevo tipo de donación
// ===============================
api.post('/save', /*[verifyToken, verifyAdminRole],*/ donationTypeController.saveDonationType);

// =============================
// Editar tipo de donación
// =============================
api.put('/:id', /*[verifyToken, verifyAdminRole],*/ donationTypeController.updateDonationType);

// ====================================
// Cambiar estatus de tipo de donación
// ====================================
api.put('/status/:id', /*[verifyToken, verifyAdminRole],*/ donationTypeController.statusDonationType);

// ================================
// Eliminar tipo de donación
// ================================
api.delete('/:id', /*[verifyToken, verifyAdminRole],*/ donationTypeController.deleteDonationType);


module.exports = api;