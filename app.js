// ====================================================
//      Configuración del servidor
//      By AYRA Team ©
// ====================================================

require('./config/env.js')

require('dotenv').config();

const express = require('express');

const json = require('express');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const cors = require('cors');

const Sequelize = require('sequelize')

const app = express();

//ver peticiones por consola
app.use(morgan('dev'));

//obtener resultados de peticiones en formato json
app.use(json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//configuración global de rutas
app.use(require('./routes/index'));

app.use(cors({ origin: process.env.CLIENT_CORS_URL }));

app.options('*', cors({ origin: process.env.CLIENT_CORS_URL }));

const sequelize = new Sequelize(process.env.ARYA_DEV_DATABASE, process.env.ARYA_DEV_USERNAME, process.env.ARYA_DEV_PASSWORD, {
    host: process.env.DIR,
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado')
    })
    .catch(err => {
        console.log(err)
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', 3000);
});

module.exports = sequelize;