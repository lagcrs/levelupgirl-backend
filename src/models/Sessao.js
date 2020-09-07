'use strict'
module.exports = (sequelize, DataTypes) => {

    const Sessao = sequelize.define('Sessao', {
        mentoria_id: {
            type: DataTypes.INTEGER,
            references: 'Mentoria',
            referencesKey: 'id'
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        });

        Sessao.associate = function(models) {
            Sessao.belongsTo(models.Mentoria, {
                foreignKey: 'mentoria_id'
            });

            Sessao.hasMany(models.Usuario, {
                foreignKey: 'usuario_id'
            })
        };
  
    return Sessao;
}