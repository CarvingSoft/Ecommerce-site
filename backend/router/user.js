const express = require('express')
const router = express.Router();
const User = require('../models/user');
const Role = require('../models/role');

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
        const user = await User.findAll({include : Role})
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

router.delete('/:id', async(req,res)=>{
  try {

      const result = await User.destroy({
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