'use strict'
module.exports = (sequelize, DataTypes) => {

    const RespostaDuvida = sequelize.define('RespostaDuvida', {
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
        });

        RespostaDuvida.associate = function(models) {
            RespostaDuvida.belongsTo(models.Duvida, {
                foreignKey: 'duvida_id'
            });

            RespostaDuvida.belongsTo(models.Usuario, {
                foreignKey: 'autor_resposta_id'
            });
        };
  
    return RespostaDuvida;
}