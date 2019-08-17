const Sequelize = require('sequelize');
const sequelize = require('../database/index.js');

const Usuario = sequelize.define('Usuario',{
        id_usuario: {  allowNull: false, type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        nome: { allowNull: false, type: Sequelize.STRING(30), validte: {len: [2, 30]} },
        login: { allowNull: false, type: Sequelize.STRING(30), validte:{len: [2, 30]} },
        equipe: {allowNull: false, type: Sequelize.STRING(15), validte:{len: [2, 15]} },
        setor: {allowNull: false, type: Sequelize.STRING(15), validte:{len: [2, 15]} },
        senha: {allowNull:false, type: Sequelize.STRING(10), validte:{len: [2, 10]} },
        perfil: {allowNull: false, type: Sequelize.STRING(10), validte:{len: [2, 10]} }
    }
);
const Chamado = sequelize.define('Chamado',{
    id_chamado: {  allowNull: false, type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    solicitante: { allowNull: false, type: Sequelize.STRING(30), validte: {len: [2, 30]} },
    motivo: { allowNull: false, type: Sequelize.STRING(30), validte:{len: [2, 30]} },
    descricao: {allowNull: true, type: Sequelize.STRING(40), validte:{len: [2, 40]} },
    status: {allowNull:false, type: Sequelize.STRING(10), validte:{len: [2, 10]} }
   }
);
const UsuarioChamado = sequelize.define('UsuarioChamado',{
    id_usuario: { type: Sequelize.INTEGER, references: { model: 'Usuario', key: 'id_usuario'}},
    id_chamado: { type: Sequelize.INTEGER, references: { model: 'Chamado', key: 'id_chamado'}}
   
    }
);

module.exports = Usuario, Chamado, UsuarioChamado;

//exporta para controle
