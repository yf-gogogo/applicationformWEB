const Sequelize = require('sequelize');
const sequelizeDB = new Sequelize('formdb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
module.exports = {
    sequelizeDB
}