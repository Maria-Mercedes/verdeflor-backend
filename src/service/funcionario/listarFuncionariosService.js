import { listarFuncionarios } from "../../repository/funcionarioRepository.js";

export default async function listarFuncionariosService() {
    let registros = await listarFuncionarios();
    return registros;
}