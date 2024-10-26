import funcionarioController from './controller/funcionarioController.js';
import login from './controller/loginController.js';

export default function rotas (servidor){
    servidor.use(funcionarioController);
    servidor.use(login)
}