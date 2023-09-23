const {DataTypes} = require ('sequelize')

const sequelize = require('../utilities/db')

const Payment = sequelize.define('payment',{
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false
   },
   addressId: {
        type: DataTypes.INTEGER,
        //allowNull: false
   },
   total: {
    type: DataTypes.INTEGER
   },
   paymentMethod: {
    type: DataTypes.STRING
   },
   date: {
    type: DataTypes.STRING,
    //allowNull: false
   },
   status: {
    type: DataTypes.STRING,
    //allowNull: false
  }
},
{
    freezeTableName: true
}

);



module.exports = Payment;