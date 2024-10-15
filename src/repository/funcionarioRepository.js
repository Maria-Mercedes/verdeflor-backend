import connection  from "./connection.js";


export async function cadastrarFuncionario(funcionario) {
    let comando = `
        INSERT INTO tb_funcionarios (nm_funcionario, rg, cpf, dt_nascimento, dt_admissao, cargo, vl_salario, bt_ativo, ct_telefone, ct_email) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    let resposta = await connection.query(comando, [funcionario.nome, funcionario.rg, funcionario.cpf, funcionario.dtNascimento, funcionario.dtAdmissao, funcionario.cargo, funcionario.salario, funcionario.estaAtivo, funcionario.telefone, funcionario.email]);
    let info = resposta[0]

   let idFuncionario = info.insertId;
   return idFuncionario;
} 


export async function consultarFuncionarioNome(nome) {
    let comando = `
        SELECT 
            id_funcionario      id,
	        nm_funcionario      nome, 
	        rg                  rg, 
            cpf                 cpf, 
            dt_nascimento       nascimento, 
            dt_admissao         admissao, 
            cargo               cargo, 
            vl_salario          salario, 
            bt_ativo            ativo, 
            ct_telefone         telefone, 
            ct_email            email
        FROM tb_funcionarios
        WHERE nm_funcionario like ?;
    `

    let resposta = await connection.query(comando, '%' + [nome] + '%');
    let registros = resposta[0];

    return registros;
}