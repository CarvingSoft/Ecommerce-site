const { Sequelize} = require('sequelize');


  const sequelize = new Sequelize('cfa_project_db','cfa_project','cfa_project',{
    host: 'localhost',
    dialect: "postgres"
  });

  module.exports = sequelize;