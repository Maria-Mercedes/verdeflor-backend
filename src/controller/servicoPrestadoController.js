import {Router} from 'express';
import { autenticar } from '../utils/jwt.js';
import cadastrarServicoService from '../service/servicosPrestados/cadastrarServicoService.js'


const endpoints = Router();

endpoints.post('/cadastrar/prestacao-de-servico', async (req, resp) => {
    try {
        let servicoPrestado = req.body;

        let id = await cadastrarServicoService(servicoPrestado);

        resp.send({
            id: id
        })

    } 
    catch (error) {
       resp.status(400).send({
        erro: error.message
       }) 
    }
})



export default endpoints;