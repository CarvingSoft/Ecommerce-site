const sequelize = require('../utilities/db')
const {DataTypes,Sequelize} = require('sequelize')
const CartDetails = sequelize.define('cartDetails',{

    productId: {type:DataTypes.INTEGER},
    quantity: {type:DataTypes.INTEGER},
    unit: {type:DataTypes.INTEGER},
    subTotal:{type:DataTypes.INTEGER}
},
{
    freezeTableName:true
}
)
module.exports = CartDetails