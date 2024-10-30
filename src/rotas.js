import funcionarioController from './controller/funcionarioController.js';
import login from './controller/loginController.js';
import servicoPrestadoController from './controller/servicoPrestadoController.js';

export default function rotas (servidor){
    servidor.use(funcionarioController);
    servidor.use(login);
    servidor.use(servicoPrestadoController);
}