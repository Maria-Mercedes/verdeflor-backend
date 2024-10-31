import { listarServicos } from "../../repository/servicoRepository.js";

export default async function listarServicoService() {
    let registros = await listarServicos();
    return registros;
}