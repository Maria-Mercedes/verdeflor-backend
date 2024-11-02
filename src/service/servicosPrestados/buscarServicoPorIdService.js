import { buscarServicoPorId } from "../../repository/servicoRepository.js";
import { idInexistente } from "../../validation/funcionario/funcionarioValidation.js";

export async function buscarServicoPorIdService(id) {
    let registros = await  buscarServicoPorId(id)

    idInexistente(id)

    let servico = registros[0]
    return servico
}