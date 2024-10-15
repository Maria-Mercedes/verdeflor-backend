import { cadastrarFuncionario } from '../../repository/funcionarioRepository.js';

export default async function cadastrarFuncionario (funcionario) {
    

    let id = await cadastrarFuncionario(funcionario);
    return id;
}