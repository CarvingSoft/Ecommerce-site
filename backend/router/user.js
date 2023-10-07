const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user');
const Role = require('../models/role');

router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, password, roleId } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (user) {
      // If the user already exists, send a response and exit the function.
      return res.status(400).send("Email already exists!");
    }

    const pass = await bcrypt.hash(password, 10);
    const user1 = new User({
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      email: email,
      password: pass,
      roleId: roleId,
    });

    await user1.save();
    // Send a success response.
    res.status(201).send(user1);
  } catch (error) {
    // Handle errors and send an error response.
    res.status(500).send(error.message);
  }



// router.post('/',async(req,res)=>{

//     try {
//       const {firstName,lastName,mobile,email,password,roleId} = req.body;
//       const user = await User.findOne({where : {email : email}})
//       if(user){
//         res.send("Email already exists!")
//       }
//       const pass = await bcrypt.hash(password,10)
//       const user1 = new User({
//                 firstName: firstName,
//                 lastName: lastName,
//                 mobile: mobile,
//                 email: email,
//                 password: pass,
//                 roleId: roleId
//             })
//             await user1.save()
//             res.send(user1)
//     } catch (error) {
//       res.send(error.message)
//     }
    // try {
    //     console.log(req.body)
    //     const {firstName,lastName,mobile,email,password,roleId} = req.body;
    //     const user = new User({
    //         firstName: firstName,
    //         lastName: lastName,
    //         mobile: mobile,
    //         email: email,
    //         password: password,
    //         roleId: roleId
    //     })
    //     await user.save();
    //     console.log(user)
    //     res.status(200).send(user)
    // } catch (error) {
    //     res.send({
    //         error:error.message
    //     });
    // }
})

router.get('/',async(req,res)=>{
    try {
        const user = await User.findAll({include:Role})
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