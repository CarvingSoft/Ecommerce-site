const {DataTypes} = require ('sequelize')

const sequelize = require("../utilities/db")

const Stock = sequelize.define('stock',{
   productId: {
        type: DataTypes.INTEGER,
        allowNull: false
   },
   quantity: {
    type: DataTypes.INTEGER
   },
   unit: {
    type: DataTypes.STRING,
   }
},
{
    freezeTableName: true
}

);


module.exports = Stock;