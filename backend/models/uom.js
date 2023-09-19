const {DataTypes} = require ('sequelize')

const sequelize = require("../utilities/db")

const Uom = sequelize.define('Uom',{
   uomName: {
        type: DataTypes.STRING,
        allowNull: false
   },
   abbreviation: {
        type: DataTypes.STRING
   }
},
{
    freezeTableName: true
}

);


module.exports = Uom;