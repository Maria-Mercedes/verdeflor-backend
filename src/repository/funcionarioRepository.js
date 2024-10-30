import connection from "./connection.js";


export async function cadastrarFuncionario(funcionario) {
    let comando = `
        INSERT INTO tb_funcionarios (	
            nm_funcionario,
            cpf,
            telefone,
            cargo,
            jornada,
            salario, 
            dt_admissao, 
            ativo)
        VALUES (?, ?, ?, ?, ?, ?, ?, true);
    `

    let resposta = await connection.query(comando, [funcionario.nome, funcionario.cpf, funcionario.telefone, funcionario.cargo, funcionario.jornada, funcionario.salario, funcionario.dtAdmissao]);
    let info = resposta[0]

    let idFuncionario = info.insertId;
    return idFuncionario;
}

export async function listarFuncionarios() {
    let comando = `
        SELECT id_funcionario 		ID,
	        nm_funcionario		    Nome,
            cpf					    CPF,
            telefone				Telefone,
            cargo 				    Cargo,
            jornada 				Jornada,
            salario 				Salário,
            dt_admissao			    'Data de Admissão',
            ativo 				    Ativo
        FROM tb_funcionarios;
    `

    let [registros] = await connection.query(comando);
    return registros;
}


export async function consultarFuncionarioNome(nome) {
    let comando = `
        SELECT 
            id_funcionario      ID,
            nm_funcionario      Nome,
            cpf                 CPF,
            telefone            Telefone,
            cargo               Cargo,
            jornada             Jornada,
            salario             Salário, 
            dt_admissao         'Data de Admissão', 
            ativo               Ativo
        FROM tb_funcionarios
        WHERE nm_funcionario like ?;
    `

    let resposta = await connection.query(comando, '%' + [nome] + '%');
    let registros = resposta[0];

    return registros;
}

export async function consultarFuncionarioId(id) {
    let comando = `
        SELECT 
            id_funcionario      ID,
            nm_funcionario      Nome,
            cpf                 CPF,
            telefone            Telefone,
            cargo               Cargo,
            jornada             Jornada,
            salario             Salário, 
            dt_admissao         'Data de Admissão', 
            ativo               Ativo
        FROM tb_funcionarios
        WHERE id_funcionario = ?;
    `

    let resposta = await connection.query(comando, '%' + [id] + '%');
    let registros = resposta[0];

    return registros;
}

export async function EditarFuncionario(id, funcionario) {
    let comando = `
    UPDATE tb_funcionarios 
	SET nm_funcionario			= ?,
		cpf						= ?,
		telefone				= ?,
        cargo 					= ?,
        jornada					= ?,
        salario 				= ?,
        dt_admissao				= ?,
        ativo 					= ?
    WHERE id_funcionario        = ?
    `

    let [info] = await connection.query(comando, [funcionario.nome, funcionario.cpf, funcionario.telefone, funcionario.cargo, funcionario.jornada, funcionario.salario, funcionario.dtAdmissao, funcionario.estaAtivo, id]);
    return info.affectedRows;
}

export async function excluirFuncionario(funcionario) {
    let comando = `
        DELETE FROM tb_funcionarios
        WHERE id_funcionario = ?
    `

    let [info] = await connection.query(comando, [funcionario.id]);
    return info.affectedRows;
}