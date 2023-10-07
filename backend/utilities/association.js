const sequelize = require('../utilities/db');
const Role = require('../models/role')
const User = require('../models/user')
const Uom = require('../models/uom')
const Product = require('../models/product')
const Stock = require('../models/stock')
const Brand = require('../models/brand');
const Category = require('../models/category');
const Order = require('../models/order')
const Address = require('../models/address')
const Payment = require('../models/payment')
const Cart = require('../models/cart');
const OrderDetails = require('../models/orderDetails');


async function syncModel(){
    Role.hasMany(User,{foreignKey:'roleId',onDelete:'CASCADE',onUpdate:'CASCADE'})
    User.belongsTo(Role)
    //Stock.hasMany(Product,{foreignKey:'stockId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    //Product.belongsTo(Stock)
    Brand.hasMany(Product,{foreignKey:'brandId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    Product.belongsTo(Brand)
    Category.hasMany(Product,{foreignKey:'categoryId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    Product.belongsTo(Category)
    User.hasMany(Address,{foreignKey:'userId',onDelete:'CASCADE',onUpdate:'CASCADE'})
    Address.belongsTo(User)
    Product.hasMany(Cart,{foreignKey:'productId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    Cart.belongsTo(Product)
    Product.hasMany(OrderDetails,{foreignKey:'productId',onDelete:'CASCADE',onUpdate:"CASCADE"})
    OrderDetails.belongsTo(Product)
    
    await sequelize.sync({
       alter:true
    })


const role = await Role.findAll({})
    if(role.length === 0){
        Role.bulkCreate([
           {roleName:'Admin'},
           {roleName:'User'}
          
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
           {categoryName:'Cleaning Items'}
          
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
           {name:'Detergent',brandId:1,description:'first grade',price:100,categoryId:1,cloudinary_id: 'wxg9txhkd6wbov0z7cuy',file_url: 'http://res.cloudinary.com/dbfjzroig/image/upload/v1696611943/wxg9txhkd6wbov0z7cuy.jpg'} 
        ])
    }

const uom = await Uom.findAll({})
    if(uom.length === 0){
        Uom.bulkCreate([
           {uomName:'Kilogram',abbreviation:'KG'} 
        ])
    }

const order = await Order.findAll({})
    if(order.length === 0){
        Order.bulkCreate([
           {userId:2,cartId:1,orderDate:'16-09-2023',deliveryCharge:0,total:700,orderStatus:'Shipped',packedDate:'17-09-2023',shippedDate:'17-09-2023',deliveredDate:'18-09-2023',soldDate:'03-10-2023'} 
        ])
    }
const user = await User.findAll({})
    if(user.length === 0){
        User.bulkCreate([
           {firstName:'Aswathy',lastName:'Sahadevan',mobile:'9495234987',email:'aswathy@gmail.com',password:'aswathy123',roleId:2}
          
        ])
    }
// const address = await Address.findAll({})
//     if(address.length === 0){
//         Address.bulkCreate([
//            {userId:1,addressLine1:'Aswathy Nivas',addressLine2:'Yakkara',city:'Palakkad',state:'Kerala',zipcode:'678701',country:'India'}
          
//         ])
//     }
const payment = await Payment.findAll({})
    if(payment.length === 0){
        Payment.bulkCreate([
           {orderId:1,addressId:1,total:500,paymentMethod:'COD'}
          
        ])
    }
   
   }

module.exports = syncModel;