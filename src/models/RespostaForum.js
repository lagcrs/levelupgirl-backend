'use strict'
module.exports = (sequelize, DataTypes) => {

    const RespostaForum = sequelize.define('RespostaForum', {
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

        RespostaForum.associate = function(models) {
            RespostaForum.belongsTo(models.Duvida, {
                foreignKey: 'duvida_id'
            });

            RespostaForum.belongsTo(models.Usuario, {
                foreignKey: 'autor_resposta_id'
            });
        };
  
    return RespostaForum;
}