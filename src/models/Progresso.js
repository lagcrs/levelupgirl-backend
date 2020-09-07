'use strict'
module.exports = (sequelize, DataTypes) => {

    const Progresso = sequelize.define('Progresso', {
        usuario_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        trilha_id: {
            type: DataTypes.INTEGER,
            references: 'Trilha',
            referencesKey: 'id'
        },
        },{
            freezeTableName: true
        });

        Progresso.associate = function(models) {
            Progresso.belongsTo(models.Trilha, {
                foreignKey: 'trilha_id'
            });
        };
  
    return Progresso;
}