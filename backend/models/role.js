const {DataTypes} =require('sequelize')

const sequelize =require('../utilities/db')

const Role = sequelize.define('role',{
    roleName:{
        type:DataTypes.STRING,
        allowNull:false}
    },
    {
        freezeTableName:true
    })
    module.exports = Role;