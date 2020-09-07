'use strict'
module.exports = (sequelize, DataTypes) => {

    const Sessao = sequelize.define('Sessao', {
        mentoria_id: {
            type: DataTypes.INTEGER,
            references: 'Mentoria',
            referencesKey: 'id'
        },
        participante_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        },{
            freezeTableName: true
        });

        Sessao.associate = function(models) {
            Sessao.belongsTo(models.Mentoria, {
                foreignKey: 'mentoria_id'
            });
        };
  
    return Sessao;
}