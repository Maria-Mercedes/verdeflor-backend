import {Router} from 'express';
import { cadastrarFuncionario, consultarFuncionarioNome } from '../repository/funcionarioRepository.js';

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


endpoints.get('/buscar/funcionario', async (req, resp) => {
    try {
        let nome = req.query.nome;
        let registros = await consultarFuncionarioNome(nome);
    
        resp.send(registros);
    }

    catch (error) {
        resp.send({
            erro: error
        })
    }
})

export default endpoints;