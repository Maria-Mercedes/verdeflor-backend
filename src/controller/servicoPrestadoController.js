import {Router} from 'express';
import { autenticar } from '../utils/jwt.js';
import cadastrarServicoService from '../service/servicosPrestados/cadastrarServicoService.js'
import listarServicoService from '../service/servicosPrestados/listarServicoService.js';
import editarFuncionarioService from '../service/servicosPrestados/editarServicoPrestadoService.js';


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


endpoints.get('/listar/servicos-prestados', async (req, resp) => {
    try {
        let registros = await listarServicoService();
        resp.send(registros);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default endpoints;

endpoints.put('/editar/servico-prestado/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let servicoPrestado = req.body;

        let linhasAfetadas = await editarFuncionarioService(id, servicoPrestado);

        if (linhasAfetadas > 0) {
            resp.send({
                resposta: "Alteração realizada com sucesso!",
                linhasAfetadas: linhasAfetadas
            })
        } else {
            resp.send({
                resposta: "ID não encontrado."
            })
        }

    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
 })