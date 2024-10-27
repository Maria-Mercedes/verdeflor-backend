import { EditarFuncionario } from "../../repository/funcionarioRepository.js";
import validarCadastro from "../../validation/funcionario/cadastroValidation.js";
import { idInexistente } from "../../validation/funcionario/funcionarioValidation.js";

export default async function editarFuncionarioService(id, funcionario) {
    validarCadastro(funcionario);
    let linhasAfetadas = await EditarFuncionario(id, funcionario);
    idInexistente(linhasAfetadas);
    return linhasAfetadas;
}