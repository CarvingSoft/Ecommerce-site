const {DataTypes} =require('sequelize')

const sequelize =require('../utilities/db')

const Role = sequelize.define("Role",{
    roleName:{
        type:DataTypes.STRING,
        allowNull:false}
    },
    {
        freezeTableName:true
    })
    module.exports = Role;