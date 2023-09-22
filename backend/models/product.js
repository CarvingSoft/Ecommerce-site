const {DataTypes} = require ('sequelize')

const sequelize = require('../utilities/db')

const Product = sequelize.define('product',{
   name: {
        type: DataTypes.STRING,
        allowNull: false
   },
   brandId: {
        type: DataTypes.INTEGER,
        //allowNull: false
   },
   description: {
    type: DataTypes.STRING
   },
   price: {
    type: DataTypes.INTEGER
   },
   categoryId: {
    type: DataTypes.INTEGER,
    //allowNull: false
   },
//    stockId: {
//     type: DataTypes.INTEGER,
//     //allowNull: false
 //  },
   cloudinary_id : {type:DataTypes.STRING},
   file_url : {type:DataTypes.STRING}
},
{
    freezeTableName: true
}

);



module.exports = Product;