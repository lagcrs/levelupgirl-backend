'use strict'
module.exports = (sequelize, DataTypes) => {

    const Resposta_Duvida = sequelize.define('Resposta_Duvida', {
        autor_resposta_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        duvida_id: {
            type: DataTypes.INTEGER,
            references: 'Duvida',
            referencesKey: 'id'
        },
        mensagem: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Resposta_Duvida.associate = function(models) {
            Resposta_Duvida.belongsTo(models.Duvida, {
                foreignKey: 'duvida_id'
            });
        };
  
    return Resposta_Duvida;
}