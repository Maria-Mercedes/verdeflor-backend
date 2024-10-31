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
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `
    let resposta = await connection.query(comando, [servicoPrestado.nomeCliente, servicoPrestado.documentoCliente, servicoPrestado.endereco, servicoPrestado.tipoServico, servicoPrestado.orcamento, servicoPrestado.dtContratacao, servicoPrestado.idFuncionario, servicoPrestado.estaAtivo]);
    let info = resposta[0]

    let idServicoPrestado = info.insertId;
    return idServicoPrestado;
}

export async function listarServicos() {
    let comando = `
    SELECT 
        id_servico			ID,
        nome_cliente		'Nome Cliente',
        documento_cliente	'CPF/CNPJ',
        endereco			Endereço,
        tipo_servico		'Tipo de Serviço',
        orcamento			'Orçamento',
        dt_contratacao		'Data de Contratação',
        id_funcionario		'ID Funcionário',	
        ativo				Ativo
    FROM tb_servicos
    `

    let [registros] = await connection.query(comando);
    return registros;
}

export async function editarServico(id, servicoPrestado) {
    let comando = `
    UPDATE 
        tb_servicos 
            SET 
                nome_cliente = ?,
                documento_cliente = ?,
                endereco = ?,
                tipo_servico = ?,
                orcamento = ?,
                dt_contratacao = ?,
                id_funcionario = ?,
                ativo = ?
    WHERE 
        id_servico = ?
    `

    let [info] = await connection.query(comando, [servicoPrestado.nomeCliente, servicoPrestado.documentoCliente, servicoPrestado.endereco, servicoPrestado.tipoServico, servicoPrestado.orcamento, servicoPrestado.dtContratacao, servicoPrestado.idFuncionario, servicoPrestado.estaAtivo, id]);
    return info.affectedRows;
}