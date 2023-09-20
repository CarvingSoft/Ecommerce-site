const express = require ("express");
const router = express.Router()
const Role = require("../models/role")

router.post('/',async(req,res)=>{
    try {
        const {roleName} = req.body
        const role = new Role({roleName})
        await role.save()
        res.send(role)
    } catch (error) {
       res.send(error.message) 
    }
})

router.get('/',async(req,res)=>{
    try {
        const role = await Role.findAll({})
        res.send(role);
    } catch (error) {
        res.send(error.message);
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const role = await Role.findOne ( {where : { id:req.params.id}})
        res.send(role)   
        
    } catch (error) {
        res.send(error)
    }
  })


  
router.patch('/:id', async(req,res)=>{
    try {
        Role.update(req.body, {
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

        const result = await Role.destroy({
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