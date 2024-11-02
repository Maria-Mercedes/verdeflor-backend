import { Router } from 'express';
import { autenticar } from '../utils/jwt.js';
import cadastrarServicoService from '../service/servicosPrestados/cadastrarServicoService.js'
import listarServicoService from '../service/servicosPrestados/listarServicoService.js';
import editarFuncionarioService from '../service/servicosPrestados/editarServicoPrestadoService.js';
import { buscarServicoPorIdService } from '../service/servicosPrestados/buscarServicoPorIdService.js';
import { listarFuncionariosAlocadosService } from '../service/servicosPrestados/listarFuncionariosAlocadosService.js';


const endpoints = Router();

endpoints.post('/cadastrar/servico-prestado', autenticar, async (req, resp) => {
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


endpoints.get('/listar/servicos-prestados', autenticar, async (req, resp) => {
    try {
        let registros = await listarServicoService();
        resp.send(registros);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/listar/funcionarios-alocados', autenticar, async (req, resp) => {
    try {
        let registros = await listarFuncionariosAlocadosService()
        resp.send(registros)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/buscar/servico-prestado/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id

        let servico = await buscarServicoPorIdService(id)

        resp.send(servico)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

export default endpoints;

endpoints.put('/editar/servico-prestado/:id', autenticar, async (req, resp) => {
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