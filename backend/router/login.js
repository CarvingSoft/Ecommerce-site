const express = require('express')
//const jwt = require('../utilities/jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router();
const Login = require('../models/login');
const User = require('../models/user');
//const jwtTokens = require('../utilities/jsonwebtoken');
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).send("User does not exist with this email");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    
    if (!validPassword) {
      return res.status(401).send("Incorrect Password");
    }

    // Create a user payload for the JWT token (do not include sensitive info)
    const userPayload = {
      id: user.id,
      name: user.firstName,
      email: user.email,
      roleId: user.roleId
    };

    // Sign the JWT token with a secret key
    const accessToken = jwt.sign(userPayload, 'your-secret-key', {
      expiresIn: '1h' // Set an expiration time for the token
    });

    // You can also create a refresh token if needed, but this example only includes an access token
    
    // Set the access token as a cookie
    res.cookie('accessToken', accessToken, { httpOnly: true });
    
    // Send the token in the response
    res.status(200).send({ token: accessToken, userToken: userPayload });
  } catch (error) {
    res.status(500).send(error.message);
  }




// router.post('/',async(req,res)=>{
//   try {
//     const {email,password} = req.body
//     const user = await User.findOne({where : {email : email}})
//     if(!user){
//       return res.send("User doesnot exists with this email")
      
//     }
//     const validPassword = await bcrypt.compare(password,user.password)
//     if(!validPassword){
//       return res.send("Incorrect Password")
//     }
//     let userToken = {
//       id : user.id,
//       name : user.firstName,
//       email : user.email,
//       password : user.password,
//       roleId : user.roleId
//     }
//     console.log('userTokennnn:'+ userToken)
    
//     let token = jwtTokens(userToken)
//     console.log('Tokennnn:'+ token)
//     res.cookie('refreshToken',token.refreshToken,{httpOnly:true})
//     res.send({"token":token,"userToken":userToken})
//   } catch (error) {
//     res.send(error.message)
//   }
  

    // try {
    //     console.log(req.body)
    //     const {email,password} = req.body;
    //     const login = new Login({
    //         email: email,
    //         password: password
    //     })
    //     await login.save();
    //     console.log(login)
    //     res.status(200).send(login)
    // } catch (error) {
    //     res.send({
    //         error:error.message
    //     });
    // }
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