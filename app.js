import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import client from './postgreSQLConnection.js';
import Api from './routes/api.js'

const APP = express();
const Not = express();

APP.use(cors());
APP.use(bodyParser.json());
APP.use('/notes', Not);

Api(Not);

const SERVER = http.createServer(APP);
const PORT = 8080;
const HOST = 'localhost';

SERVER.listen(PORT, HOST, () => console.log('server runnig'));

process.on('SIGINT', () => {
    console.log("La aplicación se está deteniendo. Realiza acciones de cierre aquí.");
    client.end();
    process.exit(0);
});