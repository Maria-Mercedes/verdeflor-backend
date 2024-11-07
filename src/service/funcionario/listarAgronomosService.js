import { listarAgronomos } from "../../repository/funcionarioRepository.js"

export default async function listarAgronomosService() {
    let registros = await listarAgronomos()
    return registros
}