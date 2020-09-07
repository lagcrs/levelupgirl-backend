'use strict'
module.exports = (sequelize, DataTypes) => {

    const Resposta_Mensagem = sequelize.define('Resposta_Mensagem', {
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
        },{
            freezeTableName: true
        });

        Resposta_Mensagem.associate = function(models) {
            Resposta_Mensagem.belongsTo(models.Mensagem, {
                foreignKey: 'mensagem_id'
            });

        };
  
    return Resposta_Mensagem;
}