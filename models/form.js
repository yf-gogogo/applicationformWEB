/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    gender: {
      type: DataTypes.ENUM('男','女'),
      allowNull: true
    },
    phonenum: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cardid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    school: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    politics: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plan_major: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    duty: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hobby: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    class_rank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    major_rank: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'form',
      timestamps:false
  });
};
