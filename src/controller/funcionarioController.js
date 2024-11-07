import {Router} from 'express';
import { autenticar } from '../utils/jwt.js';
import cadastrarFuncionarioService  from '../service/funcionario/cadastrarFuncionarioService.js'
import consultarFuncionarioService from '../service/funcionario/consultarFuncionarioService.js';
import consultarFuncionarioIdService from '../service/funcionario/consultarFuncionarioIdService.js';
import listarFuncionariosService from '../service/funcionario/listarFuncionariosService.js';
import editarFuncionarioService from '../service/funcionario/editarFuncionarioService.js';
import excluirFuncionarioService from '../service/funcionario/excluirFuncionarioService.js';
import listarJardineirosService from '../service/funcionario/listarJardineirosService.js';
import listarTecnicosService from '../service/funcionario/listarTecnicosService.js';
import listarAgronomosService from '../service/funcionario/listarAgronomosService.js';

const endpoints = Router();

endpoints.post('/cadastrar/funcionario', autenticar, async (req, resp) => {

    try {
        let funcionario = req.body;

        let id = await cadastrarFuncionarioService(funcionario);

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

endpoints.get('/buscar/funcionarios', autenticar, async (req, resp) => {
    try {
        let registros = await listarFuncionariosService();
        resp.send(registros);
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/buscar/jardineiros', autenticar, async (req, resp) => {
    try {
        let registros = await listarJardineirosService()
        resp.send(registros)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/buscar/tecnicos', autenticar, async (req, resp) => {
    try {
        let registros = await listarTecnicosService()
        resp.send(registros)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/buscar/agronomos', autenticar, async (req, resp) => {
    try {
        let registros = await listarAgronomosService()
        resp.send(registros)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/buscar/funcionario', autenticar, async (req, resp) => {
//http://localhost:5001/buscar/funcionario?nome=

    try {
        let nome = req.query.nome;
        let registros = await consultarFuncionarioService(nome);
    
        resp.send(registros);
    }

    catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
})

endpoints.get('/buscar/funcionario/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let funcionario = await consultarFuncionarioIdService(id);

        resp.send(funcionario);
    } 
    catch(error) {
        resp.status(400).send({
            erro: error.message
        })
    }
 })



 endpoints.put('/editar/funcionario/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let funcionario = req.body;

        let linhasAfetadas = await editarFuncionarioService(id, funcionario);

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

 endpoints.delete('/excluir/funcionario', autenticar, async (req, resp) => {
    try {
        let id = req.body;

        let linhasAfetadas = await excluirFuncionarioService(id);

        if (linhasAfetadas > 0) {
            resp.send({
                resposta: `Funcionário de ID ${req.body.id} excluído com sucesso.`,
                linhasAfetadas: linhasAfetadas
            })
        } else {
            resp.send({
                resposta: "ID não encontrado."
            })
        }
    } catch (error) {
        
    }
 })

export default endpoints;