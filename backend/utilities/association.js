const sequelize = require('./db');
const Role = require('../models/role')
const User = require('../models/user')


async function syncModel(){
    Role.hasMany(User,{foreignKey:'roleId',onDelete:'CASCADE',onUpdate:'CASCADE'})
    User.belongsTo(Role)
    await sequelize.sync({
       alter:true
    })
}

module.exports = syncModel;