const OrderDetails = require ('../models/orderDetails')
const express = require ('express');
const router = express();
const Product = require('../models/product')

router.post('/',async(req,res)=>{
    try{
        const {productId,quantity,unit} = req.body

        const product = await Product.findOne({ _id: productId });
        const subTotal = quantity*product.price

        const orderDetails = new OrderDetails({
           
            productId: productId,
            quantity: quantity,
            unit: unit ,
            subTotal:subTotal 
    }
    )
await orderDetails.save()

res.send(orderDetails)
}
catch(error){
    console.log(error)  
    }
})

router.get('/', async(req,res)=>{
    try {
        const orderDetails = await OrderDetails.findAll({include : Product})
        res.send(orderDetails)
    } catch (error) {
        res.send(error.msg)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const orderDetails = await OrderDetails.findOne ( {where : { id:req.params.id}})
        res.send(orderDetails)   
        
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async(req,res)=>{
    try {
      OrderDetails.update(req.body, {
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

        const result = await OrderDetails.destroy({
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