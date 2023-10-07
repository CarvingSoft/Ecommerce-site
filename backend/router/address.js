const express = require('express')
const router = express.Router();

const Address = require('../models/address')
const User = require('../models/user')


router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {userId,addressLine1,addressLine2,city,state,zipcode,country} = req.body
        const address = new Address({
            userId: userId,
            addressLine1: addressLine1,
            addressLine2: addressLine2,
            city: city,
            state: state,
            zipcode: zipcode,
            country: country
        })
        await address.save();
        console.log(address)
        res.status(200).send(address)
    } catch (error) {
        res.send({
            error: error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const address = await Address.findAll({include : [User]})
        res.send(address)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('getAddressByUserId/:id', async(req,res)=>{
  try {
      
      const address = await Address.findOne ( {where : { id:req.params.userId}})
      res.send(address)   
      
  } catch (error) {
      res.send(error)
  }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const address = await Address.findOne ( {where : { id:req.params.id}})
        res.send(address)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Address.update(req.body, {
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

        const result = await Address.destroy({
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