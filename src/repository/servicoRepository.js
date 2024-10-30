import connection from "./connection.js";

export async function cadastrarServicoPrestado (servicoPrestado) {
    let comando = `
    INSERT INTO tb_servicos (	
        nome_cliente,
        documento_cliente,
        endereco,
        tipo_servico,
        orcamento,
        dt_contratacao,
        id_funcionario,
        ativo)
    VALUES (?, ?, ?, ?, ?, ?, ?, true);
    `
    let resposta = await connection.query(comando, [servicoPrestado.nomeCliente, servicoPrestado.documentoCliente, servicoPrestado.endereco, servicoPrestado.tipoServico, servicoPrestado.orcamento, servicoPrestado.dtContratacao, servicoPrestado.idFuncionario, servicoPrestado.estaAtivo]);
    let info = resposta[0]

    let idServicoPrestado = info.insertId;
    return idServicoPrestado;
}