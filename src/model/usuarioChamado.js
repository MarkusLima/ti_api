const Sequelize = require('sequelize');
const sequelize = require('../database/index.js');

const UsuarioChamado = sequelize.define('UsuarioChamado', {
    id: {  allowNull: false, type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    UsuarioId: { allowNull: false, type: Sequelize.INTEGER, references: {model: 'Usuario', foreignKey: 'id'}},
    ChamadoId: { allowNull: false, type: Sequelize.INTEGER,references: {model: 'Chamado', foreignKey: 'id'}}
}
);

module.exports = UsuarioChamado;

//exporta para rotas