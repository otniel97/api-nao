//======================
//Puerto rest server
//======================

process.env.PORT = process.env.PORT | 3000;


//======================
//Conexión postgres
//======================

process.env.ARYA_DEV_DATABASE = 'nao';
process.env.ARYA_DEV_USERNAME = 'postgres';
process.env.ARYA_DEV_PASSWORD = 'root';
process.env.DIR = 'localhost';

//================================
//            Entorno
//================================

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//================================
//       Vencimiento del token
//================================
process.env.CADUCIDAD_TOKEN = '48h';


//================================
//     Seed de autenticación
//================================

process.env.SEED = process.env.SEED || 'secret-dev'

//================================
//     Cors client
//================================

process.env.CLIENT_CORS_URL = process.env.CLIENT_CORS_URL || 'http://localhost:8080';