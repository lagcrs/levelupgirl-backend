'use strict'

module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('Usuario', {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      user: DataTypes.STRING,
      pais: DataTypes.STRING,
      estado: DataTypes.STRING,
      cidade: DataTypes.STRING,
      telefone: DataTypes.STRING,
      facebook: DataTypes.STRING,
      linkedin: DataTypes.STRING,
      instagram: DataTypes.STRING,
    });

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Entrevista, {
            foreignKey: 'usuario_id'
        });

        Usuario.hasMany(models.Duvida, {
            foreignKey: 'autor_id'
        });

        Usuario.hasMany(models.RespostaDuvida, {
            foreignKey: 'autor_resposta_id'
        });

        Usuario.hasMany(models.RespostaForum, {
            foreignKey: 'autor_id'
        });

        Usuario.hasMany(models.RespostaMensagem, {
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