module.exports = {
    development:{
        database:{
            host: "localhost",
            port: "3306",
            name: "ti_chamados",
            dialect: "mysql",
            user: "123"
        }
    },
    production:{
        database: {
            host : process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
};
//Exportar para database