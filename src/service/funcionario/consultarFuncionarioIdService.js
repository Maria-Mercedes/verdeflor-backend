import {consultarFuncionarioId} from "../../repository/funcionarioRepository.js";

export default async function consultarFuncionarioIdService(id) {
    let funcionario = consultarFuncionarioId(id);
    return funcionario;
}