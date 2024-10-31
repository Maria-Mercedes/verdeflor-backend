export default function validarCadastroServico(servicoPrestado) {
    if (!servicoPrestado.nomeCliente) throw new Error('Nome do cliente é obrigatório!');
    if (!servicoPrestado.endereco) throw new Error('Endereço do serviço é obrigatório!');
    if (!servicoPrestado.tipoServico) throw new Error('Tipo de serviço é obrigatório!');
    if (!servicoPrestado.orcamento) throw new Error('O valor do orçamento é obrigatório!');
    if (!servicoPrestado.dtContratacao) throw new Error('A data de contratação do servico é obrigatória!');
    if (!servicoPrestado.idFuncionario) throw new Error('ID do funcionário é obrigatório!');
}