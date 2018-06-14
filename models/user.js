/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: '0'
    },
    acticode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token_exptime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user',
      timestamps:false
  });
};
