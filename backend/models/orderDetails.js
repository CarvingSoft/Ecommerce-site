const sequelize = require('../utilities/db')
const {DataTypes,Sequelize} = require('sequelize')
const OrderDetails = sequelize.define('orderDetails',{

    productId: {type:DataTypes.INTEGER},
    quantity: {type:DataTypes.INTEGER},
    unit: {type:DataTypes.STRING},
    subTotal:{type:DataTypes.INTEGER}
},
{
    freezeTableName:true
}
)
module.exports = OrderDetails