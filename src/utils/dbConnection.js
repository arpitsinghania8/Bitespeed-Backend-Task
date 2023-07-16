const { Sequelize } = require('sequelize');
const { POSTGRES } = require('../configs/env.config');

const sequelize = new Sequelize(POSTGRES.EXT_DATABASE_URL);

module.exports = { sequelize };
