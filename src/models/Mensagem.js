'use strict'
module.exports = (sequelize, DataTypes) => {

    const Mensagem = sequelize.define('Mensagem', {
        autor_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        mensagem: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Mensagem.associate = function(models) {
            Mensagem.belongsTo(models.Usuario, {
                foreignKey: 'autor_id'
            });
            Mensagem.hasMany(models.RespostaMensagem, {
                foreignKey: 'mensagem_id'
            });
        };
  
    return Mensagem;
}