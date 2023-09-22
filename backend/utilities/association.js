const sequelize = require('../utilities/db');
const Role = require('../models/role')
const User = require('../models/user')
const Uom = require('../models/uom')
const Product = require('../models/product')
const Stock = require('../models/stock')
const Brand = require('../models/brand');
const Category = require('../models/category');


async function syncModel(){
   Role.hasMany(User,{foreignKey:'roleId',onDelete:'CASCADE',onUpdate:'CASCADE'})
    User.belongsTo(Role)
    //Stock.hasMany(Product,{foreignKey:'stockId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    //Product.belongsTo(Stock)
    Brand.hasMany(Product,{foreignKey:'brandId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    Product.belongsTo(Brand)
    await sequelize.sync({
       alter:true
    })


const role = await Role.findAll({})
    if(role.length === 0){
        Role.bulkCreate([
           {roleName:'Admin'},
           {roleName:'Sales'},
           {roleName:'HR'},
           {roleName:'Tech support'}
          
        ])
    }

const brand = await Brand.findAll({})
    if(brand.length === 0){
        Brand.bulkCreate([
           {brandName:'Eliza'}
          
        ])
    }
const category = await Category.findAll({})
    if(category.length === 0){
        Category.bulkCreate([
           {categoryName:'Cleaning items'}
          
        ])
    }

// const stock = await Stock.findAll({})
//     if(stock.length === 0){
//         Stock.bulkCreate([
//            {productId:1,quantity:100,unit:'nos'}
          
//         ])
//     }

const product = await Product.findAll({})
    if(product.length === 0){
        Product.bulkCreate([
           {name:'Detergent',brandId:1,description:'first grade',price:100,categoryId:1} 
        ])
    }

    const uom = await Uom.findAll({})
    if(uom.length === 0){
        Uom.bulkCreate([
           {uomName:'Kilogram',abbreviation:'KG'} 
        ])
    }
   
   }

module.exports = syncModel;