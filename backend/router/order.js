const express = require('express')
const router = express.Router();
const Order = require('../models/order');


router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {userId,cartId,addressId,paymentMethod,orderDate,deliveryCharge,total,orderStatus,packedDate,shippedDate,deliveredDate,soldDate} = req.body
        const order = new Order({
            userId: userId,
            cartId: cartId,
            addressId: addressId,
            paymentMethod: paymentMethod,
            orderDate: orderDate,
            deliveryCharge:deliveryCharge,
            total:total,
            orderStatus: orderStatus,
            packedDate:packedDate,
            shippedDate: shippedDate,
            deliveredDate: deliveredDate,
            soldDate:soldDate
        })
        await order.save();
        console.log(order)
        res.status(200).send(order)
    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const order = await Order.findAll({})
        res.send(order)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const order = await Order.findOne ( {where : { id:req.params.id}})
        res.send(order)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Order.update(req.body, {
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

        const result = await Order.destroy({
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