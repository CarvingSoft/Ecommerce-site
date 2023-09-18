const express = require ('express');
const app= express()
const user = require('./router/user')
const role = require('./router/role')


const syncModel = require("./utilities/association")

//

const { Sequelize } = require('sequelize');
app.use(express.json());
app.use('/user',user);
app.use('/role',role)


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

