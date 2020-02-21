// ====================================================
//      Rutas API
// ====================================================

const express = require('express');

const app = express();

//archivo de rutas de modelo categoria
app.use('/category', require('./category'))

module.exports = app;