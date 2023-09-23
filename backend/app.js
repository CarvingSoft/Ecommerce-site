const express = require ('express');
const app= express()
const cors = require('cors')
const user = require('./router/user')
const role = require('./router/role')
const  brand = require('./router/brand')
const cart = require('./router/cart')
const cartDetails =require('./router/cartDetails')
const uom = require('./router/uom')
const product = require('./router/product')
const stock = require('./router/stock')
const category = require('./router/category')
const login = require('./router/login')
const order = require('./router/order')
const address = require('./router/address')
const payment = require('./router/payment')

const path = require('path');
 const multer = require('multer');
 const cloudinary = require('cloudinary').v2;


const syncModel = require('./utilities/association')



const { Sequelize } = require('sequelize');


app.use(express.json());
app.use(cors({orgin:'*'}))

app.use('/user',user);
app.use('/role',role)
app.use('/brand',brand)
app.use('/cart',cart)
app.use('/cartdetails',cartDetails)
app.use('/uom',uom);
app.use('/product',product);
app.use('/stock',stock);
app.use('/category',category);
app.use('/login',login);
app.use('/order',order);
app.use('/address',address);
app.use('/payment',payment);

 
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
 cloudinary.config({ 
   cloud_name:'dbfjzroig', 
   api_key: '183282159565323', 
   api_secret: 'Un-NuByQFkqKGJga8jZ9opbKBEA' 
 });
 
 // Configure multer for file upload
 const upload = multer({ dest: 'uploads/' });
 
 // Upload endpoint
 app.post('/upload', upload.single('image'), async (req, res) => {
   try {
     const result = await cloudinary.uploader.upload(req.file.path);
     res.json({ url: result.secure_url });
   } catch (error) {
     res.status(500).json({ error: 'Upload failed' });
   }
 });
 
 app.use('/uploads', express.static('uploads'));
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

