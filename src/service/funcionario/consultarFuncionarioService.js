import { consultarFuncionarioNome } from "../../repository/funcionarioRepository.js";


export default async function consultarFuncionarioService(nome) {
    let registros = await consultarFuncionarioNome(nome);
    return registros;
}