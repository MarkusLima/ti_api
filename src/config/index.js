module.exports = {
    development:{
        database:{
            host: "localhost",
            port: "3306",
            name: "ti_chamados",
            dialect: "mysql",
            user: "root",
            password: "1234"
        }
    },
    production:{
        database: {
            host : process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
};
//caso der o erro: Client does not support authentication protocol requested by server; consider upgrading MySQL client
//executa comando abaixo, trocando password por senha nova
//USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
//ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';
//Exportar para database