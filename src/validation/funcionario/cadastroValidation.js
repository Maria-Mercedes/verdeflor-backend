export default function validarCadastro(funcionario) {
    if (!funcionario.nome) throw new Error('Nome é obrigatório!');
    if (!funcionario.cpf) throw new Error('CPF é obrigatório!');
    if (!funcionario.telefone) throw new Error('Telefone é obrigatório!');
    if (!funcionario.cargo) throw new Error('Cargo é obrigatório!');
    if (!funcionario.jornada) throw new Error('Jornada é obrigatório!');
    if (!funcionario.salario) throw new Error('Salario é obrigatório!');
    if (!funcionario.dtAdmissao) throw new Error('Data de admissão é obrigatório!');
    if (!funcionario.estaAtivo == undefined) throw new Error('Situação é obrigatório!');
}