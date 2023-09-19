const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {firstName,lastName,roleId} = req.body;
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            roleId: roleId
        })
        await user.save();
        console.log(user)
        res.status(200).send(user)
    } catch (error) {
        res.send({
            error:error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const user = await User.findAll({})
        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const user = await User.findOne ( {where : { id:req.params.id}})
        res.send(user)   
        
    } catch (error) {
        res.send(error)
    }
  })

router.patch('/:id', async(req,res)=>{
    try {
        User.update(req.body, {
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



module.exports = router;