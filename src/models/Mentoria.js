'use strict'
module.exports = (sequelize, DataTypes) => {

    const Mentoria = sequelize.define('Mentoria', {
        titulo: DataTypes.STRING,
        data: DataTypes.DATEONLY,
        hora: DataTypes.TIME,
        mentora_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        link: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Mentoria.associate = function(models) {
            Mentoria.belongsTo(models.Usuario, {
                foreignKey: 'mentora_id'
            })
        };
        Mentoria.associate = function(models) {
            Mentoria.hasMany(models.Sessao, {
                foreignKey: 'mentoria_id'
            })
        };
  
    return Mentoria;
}