import { cadastrarFuncionario } from '../../repository/funcionarioRepository.js';

export default async function cadastrarFuncionarioService (funcionario) {
    
    let id = await cadastrarFuncionario(funcionario);
    return id;
}