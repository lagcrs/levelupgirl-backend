'use strict'
module.exports = (sequelize, DataTypes) => {

    const Duvida = sequelize.define('Duvida', {
        autor_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        mensagem: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Duvida.associate = function(models) {
            Duvida.belongsTo(models.Usuario, {
                foreignKey: 'autor_id'
            });

            Duvida.hasMany(models.Resposta_Duvida, {
                foreignKey: 'duvida_id'
            });
        };
  
    return Duvida;
}