const {DataTypes} = require ('sequelize')

const sequelize = require('../utilities/db')

const Order = sequelize.define('order',{
   paymentId: {
        type: DataTypes.INTEGER,
        allowNull: false
   },
   orderStatus: {
    type: DataTypes.STRING
   },
   shippedDate: {
    type: DataTypes.STRING
   },
   deliveredDate: {
    type: DataTypes.STRING,
    //allowNull: false
   }
},
{
    freezeTableName: true
}

);



module.exports = Order;