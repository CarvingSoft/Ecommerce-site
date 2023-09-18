const {DataTypes} = require ('sequelize')


const sequelize = require("../utilities/db")




const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
    freezeTableName : true
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = User;