import { excluirFuncionario } from "../../repository/funcionarioRepository.js";

export default async function excluirFuncionarioService(id) {
    let linhasAfetadas = await excluirFuncionario(id);
    return linhasAfetadas;
}