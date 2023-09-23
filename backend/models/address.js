const {DataTypes} = require ('sequelize')

const sequelize = require('../utilities/db')

const Address = sequelize.define('address',{
   userId: {
        type: DataTypes.INTEGER,
        allowNull: false
   },
   addressLine1: {
        type: DataTypes.STRING,
        //allowNull: false
   },
   addressLine2: {
    type: DataTypes.STRING
   },
   city: {
    type: DataTypes.STRING
   },
   state: {
    type: DataTypes.STRING,
    //allowNull: false
   },
   zipcode: {
    type: DataTypes.STRING,
    //allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    //allowNull: false
  }
},
{
    freezeTableName: true
}

);



module.exports = Address;