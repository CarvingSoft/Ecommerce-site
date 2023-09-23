const {DataTypes} = require ('sequelize')


const sequelize = require('../utilities/db')




const Login = sequelize.define('login', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    freezeTableName : true
});

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true

module.exports = Login;