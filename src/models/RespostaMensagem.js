'use strict'
module.exports = (sequelize, DataTypes) => {

    const RespostaMensagem = sequelize.define('RespostaMensagem', {
        autor_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        mensagem_id: {
            type: DataTypes.INTEGER,
            references: 'Mensagem',
            referencesKey: 'id'
        },
        mensagem: DataTypes.STRING,
        });

        RespostaMensagem.associate = function(models) {
            RespostaMensagem.belongsTo(models.Usuario, {
                foreignKey: 'autor_id'
            });

            RespostaMensagem.belongsTo(models.Duvida, {
                foreignKey: 'duvida_id'
            });

        };
  
    return RespostaMensagem;
}