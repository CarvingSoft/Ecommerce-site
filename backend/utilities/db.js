const { Sequelize} = require('sequelize');


  const sequelize = new Sequelize('admitezy','admitezy','admitezy',{
    host: 'localhost',
    dialect: "postgres"
  });

  module.exports = sequelize;