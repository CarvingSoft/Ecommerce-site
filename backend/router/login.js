const express = require('express')
const router = express.Router();
const Login = require('../models/login');


router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        const {email,password} = req.body;
        const login = new Login({
            email: email,
            password: password
        })
        await login.save();
        console.log(login)
        res.status(200).send(login)
    } catch (error) {
        res.send({
            error:error.message
        });
    }
})

router.get('/',async(req,res)=>{
    try {
        const login = await Login.findAll({})
        res.send(login);
    } catch (error) {
        res.send(error.message);
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const user = await Login.findOne ( {where : { id:req.params.id}})
        res.send(login)   
        
    } catch (error) {
        res.send(error)
    }
  })

router.patch('/:id', async(req,res)=>{
    try {
        Login.update(req.body, {
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

      const result = await Login.destroy({
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