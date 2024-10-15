import {Router} from 'express';
import { cadastrarFuncionario } from '../repository/funcionarioRepository.js';

const endpoints = Router();

endpoints.post('/cadastrar/funcionario', async (req, resp) => {

    try {
        let funcionario = req.body;

        let id = await cadastrarFuncionario(funcionario);

        resp.send({
            id: id
        })

    } 
    catch (error) {
       resp.send({
        erro: error
       }) 
    }

})

export default endpoints;