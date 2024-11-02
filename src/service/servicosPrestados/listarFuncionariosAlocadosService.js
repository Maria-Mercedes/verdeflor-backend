import { listarFuncionariosAlocados } from "../../repository/servicoRepository.js";

export async function listarFuncionariosAlocadosService() {
    let registros = listarFuncionariosAlocados()
    return registros
}