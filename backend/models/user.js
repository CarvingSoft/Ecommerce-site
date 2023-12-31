const {DataTypes} = require ('sequelize')


const sequelize = require('../utilities/db')




const User = sequelize.define('user', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  mobile: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },

  roleId: {
    type: DataTypes.INTEGER
  }
}, {
    freezeTableName : true
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = User;