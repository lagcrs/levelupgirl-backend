'use strict'
module.exports = (sequelize, DataTypes) => {

    const Trilha = sequelize.define('Trilha', {
        titulo: DataTypes.STRING,
        valor_techcoins: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        });

        Trilha.associate = function(models) {
            Trilha.hasMany(models.Progresso, {
                foreignKey: 'trilha_id'
            });
        };
  
    return Trilha;
}