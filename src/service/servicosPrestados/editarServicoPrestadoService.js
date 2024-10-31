import { editarServico } from "../../repository/servicoRepository.js";
import validarCadastroServico from "../../validation/servico/cadastroServicoValidation.js";
import { idServicoInexistente } from "../../validation/servico/servicoValidation.js";

export default async function editarFuncionarioService(id, servicoPrestado) {
    validarCadastroServico(servicoPrestado);
    let linhasAfetadas = await editarServico(id, servicoPrestado);
    idServicoInexistente(linhasAfetadas);
    return linhasAfetadas;
}