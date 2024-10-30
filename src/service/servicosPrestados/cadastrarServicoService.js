import {cadastrarServicoPrestado } from '../../repository/servicoRepository.js';
import validarCadastro from '../../validation/funcionario/cadastroValidation.js';

export default async function cadastrarServicoService (servicoPrestado) {
    //validarCadastro(funcionario)
    
    let id = await cadastrarServicoPrestado(servicoPrestado);
    return id;
}