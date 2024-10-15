import express from 'express';
import 'dotenv/config.js';
import cors from 'cors';

import './utils/global.js';

import rotas from './rotas.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

rotas(servidor);

const PORTA = process.env.PORT;
servidor.listen(PORTA, () => console.log("API Funcionando na PORTA " + PORTA));