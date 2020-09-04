'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('Usuarios', {
			id: {
			  allowNull: false,
			  autoIncrement: true,
			  primaryKey: true,
			  type: DataTypes.INTEGER,
			},
			name: {
			  allowNull: false,
			  type: DataTypes.STRING,
			},
			email: {
			  allowNull: false,
			  type: DataTypes.STRING,
			  unique: true,
			},
			password: {
			  allowNull: false,
			  type: DataTypes.STRING,
			},
			createdAt: {
			  allowNull: false,
			  type: DataTypes.DATE,
			},
			updatedAt: {
			  allowNull: false,
			  type: DataTypes.DATE,
			},
		  });
	},

	down: async (queryInterface, Sequelize) => {
		
	}
};
