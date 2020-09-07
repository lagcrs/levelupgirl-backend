'use strict'
module.exports = (sequelize, DataTypes) => {

    const Forum = sequelize.define('Forum', {
        titulo: DataTypes.STRING,
        mensagem: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Forum.associate = function(models) {
            Forum.hasMany(models.Resposta_Forum, {
                foreignKey: 'forum_id'
            });
        };
  
    return Forum;
}