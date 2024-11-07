import { listarJardineiros } from "../../repository/funcionarioRepository.js";

export default async function listarJardineirosService() {
    let registros = await listarJardineiros()
    return registros
}