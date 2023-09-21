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
        const user = await User.findAll({include:Role})
        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
})

router.patch('/',async()=>{
    try {
        const user = await user.update(req.body,{where:{id:req.params.id}})
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})



module.exports = router;