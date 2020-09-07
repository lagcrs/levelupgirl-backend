'use strict'
module.exports = (sequelize, DataTypes) => {

    const Entrevista = sequelize.define('Entrevista', {
        data: DataTypes.DATEONLY,
        hora: DataTypes.TIME,
        usuario_id: {
            type: DataTypes.INTEGER,
            references: 'Usuario',
            referencesKey: 'id'
        },
        vaga_id: {
            type: DataTypes.INTEGER,
            references: 'Vaga',
            referencesKey: 'id'
        },
        localizacao: DataTypes.STRING,
        },{
            freezeTableName: true
        });

        Entrevista.associate = function(models) {
            Entrevista.belongsTo(models.Usuario, {
                foreignKey: 'usuario_id'
            });

            Entrevista.belongsTo(models.Vaga, {
                foreignKey: 'vaga_id'
            });
        };
  
    return Entrevista;
}