'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resposta_Duvida', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      autor_resposta_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Usuario',
          key: 'id'
        }
      },
      duvida_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Duvida',
          key: 'id'
        }
      },
      mensagem: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Resposta_Duvida');
  }
};
