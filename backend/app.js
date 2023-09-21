const express = require ('express');
const app= express()
const user = require('./router/user')
const role = require('./router/role')
const  brand = require('./router/brand')
const cart = require('./router/cart')
const cartDetails =require('./router/cartDetails')
const uom = require('./router/uom')
const product = require('./router/product')
const stock = require('./router/stock')


const syncModel = require('./utilities/association')



const { Sequelize } = require('sequelize');
app.use(express.json());

app.use('/user',user);
app.use('/role',role)
app.use('/brand',brand)
app.use('/cart',cart)
app.use('/cartdetails',cartDetails)
app.use('/uom',uom);
app.use('/product',product);
app.use('/stock',stock);


// const sequelize = new Sequelize('admitezy_db', 'admitezy', 'admitezy', {
//     host: 'localhost',
//     dialect: "postgres"
//   });


const port = 8000;

app.listen(8000,()=>{
  console.log('listening on 8000')
})
 syncModel()




// async function connectionDB(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }
// connectionDB();

