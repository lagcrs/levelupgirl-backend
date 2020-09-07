'use strict'
module.exports = (sequelize, DataTypes) => {

    const Vaga = sequelize.define('Vaga', {
        titulo: DataTypes.STRING,
        empresa_id: {
            type: DataTypes.INTEGER,
            references: 'Empresa',
            referencesKey: 'id'
        },
        localizacao: DataTypes.STRING,
        descricao: DataTypes.STRING,
        area: DataTypes.STRING,
        nivel_experiencia: DataTypes.STRING,
        });

        Vaga.associate = function(models) {
            Vaga.belongsTo(models.Empresa, {
                foreignKey: 'empresa_id'
            })
        };
  
    return Vaga;
}