import mysql from 'mysql2/promise';

let connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    typeCast: function (field, next) {
        
        if(field.type === "TINY" && field.nlength === 1) {
            return (field.string() == '1');
        }

        else if (field.type.includes('DECIMAL')) {
            return Number(field.string());
        }

        else {
            return next();
        }
    }
})

console.log('Conexão com o Banco de Dados realizada com sucesso!');

export default connection;