const Cart = require ('../models/cart')
const express = require ('express');
const router = express();
const Product = require('../models/product')

router.post('/',async(req,res)=>{
    try{
        const {userId,productId,quantity} = req.body
        const cart = new Cart({
           
          userId:userId,
          productId: productId,
          quantity:quantity
    }
    )
await cart.save()
//console.log(caseFile)
res.send(cart)
}
catch(error){
    console.log(error)  
    }
})

router.get('/', async(req,res)=>{
    try {
        const cart = await Cart.findAll({include : Product})
        res.send(cart)
    } catch (error) {
        res.send(error.msg)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const cart = await Cart.findOne ( {where : { id:req.params.id}})
        res.send(cart)   
        
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        Cart.update(req.body, {
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

        const result = await Cart.destroy({
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

module.exports = router
