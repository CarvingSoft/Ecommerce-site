const express = require('express')
const router = express.Router();

const Payment = require('../models/payment')



router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {orderId,addressId,total,paymentMethod} = req.body
        const payment = new Payment({
          orderId: orderId,
            addressId: addressId,
            total: total,
            paymentMethod: paymentMethod
        })
        await payment.save();
        console.log(payment)
        res.status(200).send(payment)
    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const payment = await Payment.findAll({})
        res.send(payment)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const payment = await Payment.findOne ( {where : { id:req.params.id}})
        res.send(payment)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Payment.update(req.body, {
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

        const result = await Payment.destroy({
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