import {Router} from 'express';
import cadastrarFuncionarioService  from '../service/funcionario/cadastrarFuncionarioService.js'
import consultarFuncionarioService from '../service/funcionario/consultarFuncionarioService.js';
import consultarFuncionarioIdService from '../service/funcionario/consultarFuncionarioIdService.js';

const endpoints = Router();

endpoints.post('/cadastrar/funcionario', async (req, resp) => {

    try {
        let funcionario = req.body;

        let id = await cadastrarFuncionarioService(funcionario);

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
//http://localhost:5001/buscar/funcionario?nome=

    try {
        let nome = req.query.nome;
        let registros = await consultarFuncionarioService(nome);
    
        resp.send(registros);
    }

    catch (error) {
        resp.send({
            erro: error
        })
    }
})

endpoints.get('/buscar/funcionario/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let funcionario = await consultarFuncionarioIdService(id);

        resp.send(funcionario);
    } 
    catch(error) {
        resp.send({
            erro: error
        })
    }
 })

export default endpoints;