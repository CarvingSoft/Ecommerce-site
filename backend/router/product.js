const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const Stock = require('../models/stock');

router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {name,brandId,description,price,categoryId,stockId} = req.body
        const product = new Product({
            name: name,
            brandId: brandId,
            description: description,
            price: price,
            categoryId: categoryId,
            stockId: stockId
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
        const product = await Product.findAll({include : Stock})
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


module.exports = router;