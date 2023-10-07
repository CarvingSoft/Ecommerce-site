const {DataTypes} = require ('sequelize')

const sequelize = require('../utilities/db')

const Payment = sequelize.define('payment',{
    orderId: {
        type: DataTypes.INTEGER
        //allowNull: false
   },
   addressId: {
        type: DataTypes.INTEGER
        //allowNull: false
   },
   total: {
    type: DataTypes.DECIMAL
   },
   paymentMethod: {
    type: DataTypes.STRING
   }
},
{
    freezeTableName: true
}

);



module.exports = Payment;