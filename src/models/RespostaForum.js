'use strict'
module.exports = (sequelize, DataTypes) => {

    const Resposta_Forum = sequelize.define('Resposta_Forum', {
        autor_resposta_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        forum_id: {
            type: DataTypes.INTEGER,
            references: 'Forum',
            referencesKey: 'id'
        },
        mensagem: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Resposta_Forum.associate = function(models) {
            Resposta_Forum.belongsTo(models.Forum, {
                foreignKey: 'forum_id'
            });
        };
  
    return Resposta_Forum;
}