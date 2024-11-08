import { listarFaturamentoAnual } from "../../repository/servicoRepository.js";

export default async function listarFaturamentoAnualService() {
    let registros = listarFaturamentoAnual()
    return registros
}