import funcionarioController from './controller/funcionarioController.js'

export default function rotas (servidor){
    servidor.use(funcionarioController);
}