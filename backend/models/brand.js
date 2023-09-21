const sequelize = require('../utilities/db')
const {DataTypes,Sequelize} = require('sequelize')
const Brand = sequelize.define  ('brand',{

    brandName: {type:DataTypes.STRING}
},
{
    freezeTableName : true
}
)
module.exports = Brand