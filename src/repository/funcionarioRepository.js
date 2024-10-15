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