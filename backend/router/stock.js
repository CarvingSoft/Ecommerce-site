const express = require('express')
const router = express.Router();
const Stock = require('../models/stock')

router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {productId,quantity,unit} = req.body
        const stock = new Stock({
            productId: productId,
            quantity: quantity,
            unit: unit
        })
        await stock.save();
        console.log(stock)
        res.status(200).send(stock)
    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const stock = await Stock.findAll({})
        res.send(stock)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const stock = await Stock.findOne ( {where : { id:req.params.id}})
        res.send(stock)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Stock.update(req.body, {
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

        const result = await Stock.destroy({
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