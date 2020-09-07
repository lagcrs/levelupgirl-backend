'use strict'
module.exports = (sequelize, DataTypes) => {

    const Empresa = sequelize.define('Empresa', {
      razao_social: DataTypes.STRING,
      nome_fantasia: DataTypes.STRING,
      cnpj: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      pais: DataTypes.STRING,
      estado: DataTypes.STRING,
      cidade: DataTypes.STRING,
      site: DataTypes.STRING,
      
    },{
        freezeTableName: true
      }
    );

    Empresa.associate = function(models) {
        Empresa.hasMany(models.Vaga, {
            foreignKey: 'empresa_id'
        })
    };
  
    return Empresa;
}