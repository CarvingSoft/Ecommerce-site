const express = require ("express");
const router = express.Router()
const Role = require('../models/role')

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
        const role = await Role.findAll()
        res.send(role)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;