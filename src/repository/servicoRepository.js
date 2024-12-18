import connection from "./connection.js";

export async function cadastrarServicoPrestado(servicoPrestado) {
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
	    s.id_servico		    ID,
	    s.nome_cliente		    'NomeCliente',
        s.documento_cliente	    'CPF_CNPJ',
        s.endereco			    Endereco,
        s.tipo_servico		    'TipoServico',
        s.orcamento			    'Orcamento',
        s.dt_contratacao	    'DataContratacao',
        s.id_funcionario		'IdFuncionario',
        f.nm_funcionario	    'NomeFuncionario',	
	    s.ativo				    Ativo
    FROM
        tb_servicos s
    JOIN 
	    tb_funcionarios f ON s.id_funcionario = f.id_funcionario;
    `

    let [registros] = await connection.query(comando);
    return registros;
}

export async function listarFuncionariosAlocados() {
    let comando = `
    SELECT 
	    s.id_servico			ID,
        s.id_funcionario		IdFuncionario,
        f.nm_funcionario 		NomeFuncionario
    FROM
        tb_servicos s
    JOIN
	    tb_funcionarios f ON s.id_funcionario = f.id_funcionario;
    `

    let [registros] = await connection.query(comando)
    return registros
}

export async function listarFaturamentoAnual() {
    const comando = `
    WITH meses_ano AS (
        SELECT 
            2024 AS ano,
            n AS mes
        FROM 
            (SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL
            SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL
            SELECT 9 UNION ALL SELECT 10 UNION ALL SELECT 11 UNION ALL SELECT 12) AS meses
    )
    SELECT 
        m.ano,
        m.mes,
        COALESCE(SUM(s.orcamento), 0) AS total_orcamento
    FROM 
        meses_ano AS m
    LEFT JOIN 
        tb_servicos AS s 
        ON YEAR(s.dt_contratacao) = m.ano AND MONTH(s.dt_contratacao) = m.mes
    WHERE 
        m.ano = 2024
    GROUP BY 
        m.ano, m.mes
    ORDER BY 
        m.ano, m.mes;
    `

    let [registros] = await connection.query(comando)
    return registros
}

export async function buscarServicoPorId(id) {
    let comando = `
    SELECT 
        nome_cliente		'NomeCliente',
        documento_cliente	'CPF_CNPJ',
        endereco			Endereco,
        tipo_servico		'TipoServico',
        orcamento			'Orcamento',
        dt_contratacao		'DataContratacao',
        id_funcionario		'IdFuncionario',	
        ativo				Ativo
    FROM tb_servicos
    WHERE id_servico = ?
    `

    let resposta = await connection.query(comando, [id]);
    let registros = resposta[0];

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