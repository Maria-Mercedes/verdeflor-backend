import funcionarioController from './controller/funcionarioController.js';
import login from './controller/loginController.js';
import cadastrarPrestacaoServico from './controller/servicoPrestadoController.js';

export default function rotas (servidor){
    servidor.use(funcionarioController);
    servidor.use(login);
    servidor.use(cadastrarPrestacaoServico);
}