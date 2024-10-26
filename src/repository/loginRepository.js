import con from "./connection.js"

export async function login(credenciais) {
    const comando = `
        SELECT id_usuario       as id,
               ds_email         as email
        FROM tb_usuario 
        WHERE ds_email = ?
        AND   ds_senha = ?
    `;

    const [registros] = await con.query(comando, [credenciais.email, credenciais.senha]);
    return registros[0];
}