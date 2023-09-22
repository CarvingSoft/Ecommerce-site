const sequelize = require('../utilities/db')
const {DataTypes,Sequelize} = require('sequelize')
const Category = sequelize.define  ('category',{

    categoryName: {type:DataTypes.STRING}
},
{
    freezeTableName : true
}
)
module.exports = Category