const sequelize = require('./db');
const Role = require('../models/role')
const User = require('../models/user')
const Uom = require('../models/uom')
const Product = require('../models/product')
const Stock = require('../models/stock')


async function syncModel(){
    Role.hasMany(User,{foreignKey:'roleId',onDelete:'CASCADE',onUpdate:'CASCADE'})
    User.belongsTo(Role)
    Product.hasMany(Stock,{foreignKey:'stockId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    Stock.belongsTo(Product)
    await sequelize.sync({
       alter:true
    })
}

module.exports = syncModel;