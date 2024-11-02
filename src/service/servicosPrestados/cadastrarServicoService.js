import {cadastrarServicoPrestado } from '../../repository/servicoRepository.js';
import validarCadastroServico from '../../validation/servico/cadastroServicoValidation.js';

export default async function cadastrarServicoService (servicoPrestado) {
    validarCadastroServico(servicoPrestado)
    
    let id = await cadastrarServicoPrestado(servicoPrestado);
    return id;
}