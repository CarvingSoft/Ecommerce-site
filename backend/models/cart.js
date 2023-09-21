const sequelize = require('../utilities/db')
const {DataTypes,Seqelize} = require('sequelize')
const Cart = sequelize.define('cart',{

    userID: {type:DataTypes.INTEGER},
    totalOfSubTotal: {type:DataTypes.INTEGER},
    deliveryCharge: {type:DataTypes.INTEGER},
    total: {type:DataTypes.INTEGER}
},
{
    freezeTableName:true
}
)
module.exports = Cart