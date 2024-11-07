import { listarTecnicos } from "../../repository/funcionarioRepository.js"

export default async function listarTecnicosService() {
    let registros = await listarTecnicos()
    return registros
}