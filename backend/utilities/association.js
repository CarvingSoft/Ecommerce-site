const sequelize = require('../utilities/db');
const Role = require('../models/role')
const User = require('../models/user')
const Uom = require('../models/uom')
const Product = require('../models/product')
const Stock = require('../models/stock')


async function syncModel(){
   Role.hasMany(User,{foreignKey:'roleId',onDelete:'CASCADE',onUpdate:'CASCADE'})
    User.belongsTo(Role)
    Stock.hasMany(Product,{foreignKey:'stockId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    Product.belongsTo(Stock)
    await sequelize.sync({
       alter:true
    })
}

module.exports = syncModel;