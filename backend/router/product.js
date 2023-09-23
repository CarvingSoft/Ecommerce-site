const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const Stock = require('../models/stock');
const Brand = require('../models/brand')
const Category = require('../models/category')

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads'); // Specify the destination directory
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {name,brandId,description,price,categoryId,cloudinary_id,file_url} = req.body
        const product = new Product({
            name: name,
            brandId: brandId,
            description: description,
            price: price,
            categoryId: categoryId,
            //stockId: stockId,
            cloudinary_id: cloudinary_id,
            file_url: file_url
        })
        await product.save();
        console.log(product)
        res.status(200).send(product)
    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const product = await Product.findAll({include : [Brand,Category]})
        //const product = await Product.findAll({include : Stock})
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const product = await Product.findOne ( {where : { id:req.params.id}})
        res.send(product)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Product.update(req.body, {
            where: { id: req.params.id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Updated"
                });
              } else {
                res.send({
                  message: `Cannot update `
                });
              }
            })
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      }
})

router.delete('/:id', async(req,res)=>{
    try {

        const result = await Product.destroy({
            where: { id: req.params.id },
            force: true,
        });

        if (result === 0) {
            return res.status(404).json({
              status: "fail",
              message: "Not found",
            });
          }
      
          res.status(204).json();
        }  catch (error) {
        res.send({error: error.message})
    }
    
})

router.post('/fileupload', upload.single('file'), async (req, res) => {
  try {
      const result = await cloudinary.uploader.upload(req.file.path);
      res.send(result);
  } catch (error) {
      res.send(error);
  }
});

module.exports = router;