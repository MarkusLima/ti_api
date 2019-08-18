const Sequelize = require('sequelize');
const sequelize = require('../database/index.js');

const Usuario = sequelize.define('Usuario',{
        id: {  allowNull: false, type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        nome: { allowNull: false, type: Sequelize.STRING(30), validate: {len: [2, 30]} },
        equipe: {allowNull: false, type: Sequelize.STRING(15), validate:{len: [2, 15]} },
        setor: {allowNull: false, type: Sequelize.STRING(15), validate:{len: [2, 15]} },
        senha: {allowNull:false, type: Sequelize.STRING(10), validate:{len: [2, 10]} },
        perfil: {allowNull: false, type: Sequelize.STRING(10), validate:{len: [2, 10]} } },
);

module.exports = Usuario;

//exporta para controle
