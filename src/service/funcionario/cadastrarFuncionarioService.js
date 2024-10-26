import { cadastrarFuncionario } from '../../repository/funcionarioRepository.js';
import validarCadastro from '../../validation/funcionario/cadastroValidation.js';

export default async function cadastrarFuncionarioService (funcionario) {
    validarCadastro(funcionario)
    
    let id = await cadastrarFuncionario(funcionario);
    return id;
}