'use strict'

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('Usuario', {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      user: DataTypes.STRING,
      soft_skills: DataTypes.STRING,
      hard_skills: DataTypes.STRING,
      tech_coins: DataTypes.INTEGER,
      pais: DataTypes.STRING,
      estado: DataTypes.STRING,
      cidade: DataTypes.STRING,
      telefone: DataTypes.STRING,
      facebook: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      instagram: DataTypes.STRING,
    },{
        freezeTableName: true
    });

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Entrevista, {
            foreignKey: 'usuario_id'
        });

        Usuario.hasMany(models.Duvida, {
            foreignKey: 'autor_id'
        });

        Usuario.hasMany(models.Resposta_Duvida, {
            foreignKey: 'autor_resposta_id'
        });

        Usuario.hasMany(models.Resposta_Forum, {
            foreignKey: 'autor_resposta_id'
        });

        Usuario.hasMany(models.Resposta_Mensagem, {
            foreignKey: 'autor_id'
        });

        Usuario.hasMany(models.Mentoria, {
            foreignKey: 'mentora_id'
        });

        Usuario.hasOne(models.Progresso, {
            foreignKey: 'usuario_id'
        });
    };
  
    return Usuario;
}