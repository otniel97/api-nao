// ====================================================
//      Rutas API
//      By AYRA Team ©
// ====================================================

const express = require('express');

const app = express();

//archivo de rutas de modelo donationtype
app.use('/donationtype', require('./donationtype'))

module.exports = app;