const Sequelize = require('sequelize');
const sequelize = require('../database/index.js');

const Chamado = sequelize.define('Chamado',{
    id: {  allowNull: false, type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    solicitante: { allowNull: false, type: Sequelize.STRING(30), validate: {len: [2, 30]} },
    nome: { allowNull: false, type: Sequelize.STRING(30), validate: {len: [2, 30]} },
    equipe: {allowNull: false, type: Sequelize.STRING(15), validate:{len: [2, 15]} },
    motivo: { allowNull: false, type: Sequelize.STRING(30), validate:{len: [2, 30]} },
    descricao: {allowNull: true, type: Sequelize.STRING(40), validate:{len: [2, 40]} },
    status: {allowNull:false, type: Sequelize.STRING(10), validate:{len: [2, 10]} } },
);

module.exports = Chamado;

//exporta para rotas
