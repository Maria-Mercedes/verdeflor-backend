import connection  from "./connection.js";


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
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `

    let resposta = await connection.query(comando, [funcionario.nome, funcionario.cpf, funcionario.telefone, funcionario.cargo, funcionario.jornada, funcionario.salario,  funcionario.dtAdmissao, funcionario.estaAtivo]);
    let info = resposta[0]

   let idFuncionario = info.insertId;
   return idFuncionario;
} 


export async function consultarFuncionarioNome(nome) {
    let comando = `
        SELECT 
            id_funcionario,
            nm_funcionario,
            cpf,
            telefone,
            cargo,
            jornada,
            salario, 
            dt_admissao, 
            ativo
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
            id_funcionario,
            nm_funcionario,
            cpf,
            telefone,
            cargo,
            jornada,
            salario, 
            dt_admissao, 
            ativo
        FROM tb_funcionarios
        WHERE id_funcionario like ?;
    `

    let resposta = await connection.query(comando, '%' + [id] + '%');
    let registros = resposta[0];

    return registros;
}