const sequelize = require('../utilities/db')
const {DataTypes,Seqelize} = require('sequelize')
const Cart = sequelize.define('cart',{

    userId: {type:DataTypes.INTEGER},
    productId: {type:DataTypes.INTEGER},
    quantity: {type:DataTypes.INTEGER}
},
{
    freezeTableName:true
}
)
module.exports = Cart