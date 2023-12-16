const {DataTypes} = require ('sequelize')

const sequelize = require('../utilities/db')

const Order = sequelize.define('order',{
   userId: {
    type: DataTypes.INTEGER,
        //allowNull: false
   },
   cartId: {
        type: DataTypes.INTEGER,
        //allowNull: false
   },
   addressId: {
    type: DataTypes.INTEGER,
    //allowNull: false
    },
    paymentMethod: {
    type: DataTypes.STRING,
    //allowNull: false
    },
   orderDate: {
    type: DataTypes.STRING
   },
   deliveryCharge: {
    type: DataTypes.INTEGER
   },
   total: {
    type: DataTypes.INTEGER
   },
   orderStatus: {
    type: DataTypes.STRING
   },
   packedDate: {
    type: DataTypes.STRING
   },
   shippedDate: {
    type: DataTypes.STRING
   },
   deliveredDate: {
    type: DataTypes.STRING,
    //allowNull: false
   },
   soldDate: {
    type: DataTypes.STRING
   }
},
{
    freezeTableName: true
}

);



module.exports = Order;