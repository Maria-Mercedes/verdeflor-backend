import {consultarFuncionarioId} from "../../repository/funcionarioRepository.js";
import { idInexistente } from "../../validation/funcionario/funcionarioValidation.js";

export default async function consultarFuncionarioIdService(id) {
    let registros = await consultarFuncionarioId(id);

    idInexistente(registros);

    let funcionario = registros[0];
    return funcionario;
}