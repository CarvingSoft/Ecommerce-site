const CartDetails = require ('../models/cartDetails')//couldnt get the path
const express = require ('express');
const router = express();
//const router = express();

router.post('/',async(req,res)=>{
    try{
        const {productId,quantity,unit,subTotal} = req.body
        const cartDetails = new CartDetails({
           
            productId: productId,
            quantity: quantity,
            unit: unit ,
            subTotal:subTotal
            
    }
    )
await cartDetails.save()

res.send(cartDetails)
}
catch(error){
    console.log(error)  
    }
})

router.get('/', async(req,res)=>{
    try {
        const cartDetails = await CartDetails.findAll()
        res.send(cartDetails)
    } catch (error) {
        res.send(error.msg)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        
        const cartDetails = await CartDetails.findOne ( {where : { id:req.params.id}})
        res.send(cartDetails)   
        
    } catch (error) {
        res.send(error)
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        CartDetails.update(req.body, {
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

        const result = await CartDetails.destroy({
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

module.exports = router