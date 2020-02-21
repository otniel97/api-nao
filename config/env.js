//======================
//Puerto rest server
//======================

process.env.PORT = process.env.PORT | 3000;


//======================
//Conexión postgres
//======================

process.env.NAMEDB = 'nao';
process.env.USERDB = 'postgres';
process.env.PASSWORDDB = 'root';
process.env.DIR = 'localhost';

//================================
//            Entorno
//================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

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